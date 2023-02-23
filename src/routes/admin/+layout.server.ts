import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if not logged in
  if (!locals.user || !locals.user.isAdmin) {
    throw redirect(302, '/')
  }
}
