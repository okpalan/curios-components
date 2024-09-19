# Component Issue: Jittery Dropdowns

## Overview

Dropdown menus are essential for user navigation in web applications. However, a common issue faced by developers is jittery dropdowns that cause flickering and layout shifts during hover interactions. This issue negatively impacts user experience and usability.

## Problem Details

### Symptoms

- Visual jitter or flicker when hovering over dropdown links.
- Unstable layout as padding changes affect the overall size of the dropdown.

### Example CSS Causing Jitter

```css
/* Hover effect for dropdown links */
.dropdown-content a:hover {
    padding: 15px 20px; /* Increases padding on hover */
    background-color: #007bff; /* Blue background on hover */
    color: white; /* White text on hover */
}
```
