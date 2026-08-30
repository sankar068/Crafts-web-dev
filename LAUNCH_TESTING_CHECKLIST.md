# Launch Overlay Testing Checklist

## Pre-Launch Testing (Before 30 August 2026, 11:11:11 PM IST)

### Visual Appearance
- [ ] Launch overlay covers entire viewport (no gaps/overflow)
- [ ] Background is deep black with subtle grain effect
- [ ] Grid lines are visible but very subtle
- [ ] No horizontal scrolling on any screen size
- [ ] Header is visible with CRAFT logo and "LAUNCHING SOON" status

### Header
- [ ] "CRAFT" logo displays correctly
- [ ] Status indicator dot pulses smoothly
- [ ] "LAUNCHING SOON" text is positioned correctly
- [ ] Border between header and content is subtle

### Hero Section
- [ ] "A NEW DIGITAL STANDARD IS ARRIVING" eyebrow text appears
- [ ] "CRAFT" main text is large and prominent
- [ ] "Digital experiences, crafted differently" tagline is visible
- [ ] "SINCE 2026" detail text appears below
- [ ] All text fades in smoothly on load

### Countdown
- [ ] All four countdown units display (Days, Hours, Minutes, Seconds)
- [ ] Numbers update every second
- [ ] Transition when numbers change is smooth
- [ ] Labels below each number are correct
- [ ] "THE COUNTDOWN BEGINS" text appears above
- [ ] Launch date/time shows "30 AUGUST 2026" and "11:11:11 PM IST"

### Footer
- [ ] "© CRAFT FOR THE NEXT DIGITAL" text appears on left
- [ ] Instagram link is clickable and opens in new tab
- [ ] Email link works with mailto:
- [ ] Arrow indicators appear on hover
- [ ] Border above footer is subtle

### Animations
- [ ] Elements fade in on initial load
- [ ] Staggered animation delays work correctly
- [ ] Countdown numbers transition smoothly
- [ ] No jarring or abrupt movements
- [ ] Animations respect `prefers-reduced-motion` setting

### Responsive Testing

#### Desktop (1920x1080)
- [ ] Layout is centered and balanced
- [ ] All text is readable
- [ ] Countdown has proper spacing between units
- [ ] Social links are well-positioned

#### Tablet (768x1024)
- [ ] Hero text scales appropriately
- [ ] Countdown still readable
- [ ] No layout breaks
- [ ] Touch targets are adequate

#### Mobile (375x812)
- [ ] No horizontal scrolling
- [ ] CRAFT text is large but not overwhelming
- [ ] Countdown units stack properly
- [ ] Social links are tap-friendly
- [ ] All text is readable
- [ ] Gaps/padding are appropriate for small screens

### Functionality

#### Countdown Logic
- [ ] Countdown starts immediately on page load
- [ ] Numbers update every second
- [ ] Hours don't exceed 23
- [ ] Minutes don't exceed 59
- [ ] Seconds don't exceed 59
- [ ] Countdown is the same regardless of refresh
- [ ] Countdown continues through page refreshes

#### Timezone Handling
- [ ] Countdown shows same remaining time globally
- [ ] Timestamp `2026-08-30T23:11:11+05:30` is respected
- [ ] Countdown doesn't depend on local system time

#### Existing Website
- [ ] Existing website is loaded behind overlay
- [ ] Website is NOT visible while overlay is shown
- [ ] Website is NOT interactive while overlay is shown
- [ ] Scrolling is disabled (`document.body` has `overflow: hidden`)

### Browser Compatibility
- [ ] Chrome/Edge works perfectly
- [ ] Firefox works perfectly
- [ ] Safari works perfectly
- [ ] No console errors
- [ ] No console warnings related to launch overlay

### Accessibility
- [ ] All text has sufficient contrast
- [ ] Links are keyboard accessible
- [ ] Links have proper focus states
- [ ] Screen reader can read all content
- [ ] Color is not the only way to convey information

## Launch Moment Testing (During/After 30 August 2026, 11:11:11 PM IST)

### Celebration Sequence
- [ ] Countdown reaches `00 : 00 : 00 : 00`
- [ ] Confetti burst starts immediately
- [ ] Confetti particles use gravity correctly
- [ ] Confetti has various shapes (squares, circles, lines)
- [ ] Confetti animates for ~2 seconds
- [ ] "CRAFT IS LIVE" message appears after confetti starts
- [ ] Message includes "WELCOME TO CRAFT" subtitle
- [ ] Messages have proper scale animation

### Overlay Removal
- [ ] Overlay completely disappears after celebration (6 seconds total)
- [ ] No residual overlay elements remain
- [ ] Page is smooth during transition

### Website Reveal
- [ ] Existing CRAFT website becomes fully visible
- [ ] Website is fully interactive
- [ ] Navigation works
- [ ] Scrolling is enabled
- [ ] All website functionality works normally
- [ ] No broken elements from overlay integration

### After Refresh
- [ ] Refreshing page after launch doesn't show overlay
- [ ] Website loads normally
- [ ] No overlay remnants in DOM

## Post-Launch Testing (After 30 August 2026, 11:11:11 PM IST)

### Persistent State
- [ ] Overlay never reappears on subsequent visits
- [ ] Overlay doesn't reappear after clearing localStorage
- [ ] Overlay doesn't reappear after clearing cookies
- [ ] Overlay doesn't reappear in incognito mode
- [ ] Overlay doesn't reappear on different device
- [ ] Overlay doesn't reappear in different browser
- [ ] Timestamp is the only source of truth

### Website Functionality
- [ ] All navigation links work
- [ ] All forms are functional
- [ ] All external links work
- [ ] All animations work
- [ ] SEO metadata is intact
- [ ] Mobile responsiveness works

## Performance Checklist

- [ ] Page loads quickly (< 3s initial load)
- [ ] Countdown updates smoothly (60fps where possible)
- [ ] No memory leaks (DevTools Memory tab)
- [ ] No unnecessary re-renders (DevTools Profiler)
- [ ] Confetti animation is smooth (60fps or consistent)
- [ ] Bundle size is reasonable (< 50KB increase)

## Build & Deployment Checklist

- [ ] `npm run typecheck` passes without errors
- [ ] `npm run lint` passes without critical errors
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] No console errors in production build
- [ ] Source maps are available for debugging
- [ ] All assets load correctly

## Sign-Off

- [ ] All items checked
- [ ] No visual issues
- [ ] No functional issues
- [ ] No accessibility issues
- [ ] Ready for production
- [ ] Timestamp verified: `2026-08-30T23:11:11+05:30`
- [ ] Launch date/time matches brief: "30 AUGUST 2026 · 11:11:11 PM IST"

## Notes

Record any issues, fixes, or observations below:

```
[Space for notes]
```
