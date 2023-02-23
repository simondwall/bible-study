import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import { db } from '$lib/database'

export const load: PageServerLoad = async ({ locals, params }) => {
    // redirect user if not logged in
    if (!locals.user) {
        throw redirect(302, '/')
    }

    const book = await db.book.findUnique({
        where: { name: params.book },
        select: { id: true }
    });
    const user = await db.user.findUnique({
        where: { username: locals.user.name },
        select: { id: true },
    });

    if (!book) {
        return fail(404)
    }
    if (!user) {
        return fail(401)
    }

    const summary = await db.summary.findFirst({
        where: { user: { id: user.id }, book: { id: book.id } },
        select: { text: true }
    })

    return { book: params.book, text: summary? summary.text: '' }
}

const save: Action = async ({ params, locals, request }) => {
    const data = await request.formData()
    const text = data.get('text')

    if (typeof text !== 'string' || !text) {
        return fail(400, { invalid: true })
    }

    const user = await db.user.findUnique({
        where: { username: locals.user.name },
        select: { id: true }
    });
    const book = await db.book.findUnique({
        where: { name: params.book },
        select: { id: true }
    });

    if (!user) {
        return fail(401);
    }

    if (!book) {
        return fail(404);
    }

    const summary = await db.summary.findFirst({
        where: {
            user: { id: user.id },
            book: { id: book.id },
        },
        select: {
            id: true
        }
    })

    if (!summary) {
        await db.summary.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                },
                book: {
                    connect: {
                        id: book.id
                    }
                },
                text: text
            }
        });
    } else {
        await db.summary.update({
            where: {
                id: summary.id
            },
            data: {
                text: text
            }
        })
    }
}

export const actions: Actions = { save }
