# Remove Stats Section from Footer

## Overview

Remove the "Stats" section displaying total page views from the website footer on both desktop and mobile layouts. This will simplify the footer to show only the "Links" section (LinkedIn, GitHub, Contact).

## Problem Statement

The stats section adds unnecessary complexity:
- Supabase database queries on every page load
- Async state management for page view counts
- Duplicate conditional rendering for desktop/mobile
- Redundant tracking (Vercel Analytics already active)
- Unused Supabase dependency

## Proposed Solution

**Complete removal of stats tracking system:**
- Remove stats UI from footer
- Remove page view tracking from layout
- Delete Supabase API endpoint
- Remove Supabase client and dependency

**Rationale:** You already have Vercel Analytics (commit `61f4162`). Running two analytics systems is unnecessary complexity. If custom tracking is needed in the future, it's in git history.

## Acceptance Criteria

**Code Removal:**
- [ ] Desktop stats section removed (footer.svelte:47-65)
- [ ] Mobile stats section removed (footer.svelte:90-99)
- [ ] Stats data fetching removed (footer.svelte:2-3, 6-23)
- [ ] Page tracking removed (+layout.svelte:15-25)
- [ ] `/api/page_view.js` deleted
- [ ] `/src/client.js` deleted (only used for stats)
- [ ] `@supabase/supabase-js` removed from package.json
- [ ] Supabase env variables removed from `.env` (if unused elsewhere)

**Quality Checks:**
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npm run check`)
- [ ] Footer displays correctly on desktop and mobile
- [ ] Footer spacing looks balanced with single Links column
- [ ] No console errors in browser DevTools

## What to Delete

**Files to DELETE entirely:**
1. `/api/page_view.js` - Serverless function for tracking
2. `/src/client.js` - Supabase client (only used for stats)

**Code to REMOVE from existing files:**

**src/lib/components/layout/footer.svelte:**
- Line 2: Supabase import
- Line 6: `data` state variable
- Lines 8-19: `getPageViews()` function
- Lines 21-23: `onMount` hook
- Lines 47-65: Desktop stats section
- Lines 90-99: Mobile stats section

**src/routes/+layout.svelte:**
- Lines 15-17: `page_view()` function
- Lines 19-21: `$effect` hook (tracking on navigation)
- Lines 23-25: `onMount` hook (tracking on load)
- Line 6: `import { onMount }` (if not used elsewhere)

**package.json:**
- Remove `@supabase/supabase-js` dependency

**What Stays:**
- `currentDate` in footer (copyright year)
- Footer "Links" section
- Vercel Analytics

## Implementation Steps

This is a single atomic change - one commit:

1. Delete `/api/page_view.js`
2. Delete `/src/client.js`
3. Remove stats code from `footer.svelte`
4. Remove tracking code from `+layout.svelte`
5. Remove `@supabase/supabase-js` from `package.json`
6. Run `npm install` to update lock file
7. Test: `npm run build && npm run dev`
8. Visual check of footer on desktop and mobile
9. Commit with message: "Remove stats tracking system"

## Testing

Simple verification:
- [ ] `npm run build` succeeds
- [ ] Footer looks balanced on desktop and mobile
- [ ] No console errors
- [ ] Done

## References

**Files:**
- `src/lib/components/layout/footer.svelte` - Stats display
- `src/routes/+layout.svelte:40` - Renders footer
- `api/page_view.js` - Tracking endpoint
- `src/client.js` - Supabase client

**Related:**
- Commit `61f4162` - Added Vercel Analytics

## Rollback

If needed: `git revert <commit-hash>`

Stats code is in git history if ever needed again (it won't be).
