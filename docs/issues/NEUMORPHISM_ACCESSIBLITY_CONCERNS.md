# Component Issue: Neumorphism Accessibility Concerns

## Overview

Neumorphism, while aesthetically appealing, often lacks sufficient color contrast, especially in light/dark themes. This can create accessibility issues for users with visual impairments, making it difficult to distinguish components or interact with the UI effectively. Ensuring compliance with accessibility standards like WCAG (Web Content Accessibility Guidelines) is critical for Draft Components.

## Problem Details

### Symptoms

- **Low contrast** between shadows and background, especially in light and dark modes.
- Inadequate distinction between interactive elements and the background.
- Failure to meet the minimum contrast ratio of 4.5:1 as required by accessibility standards.

### Affected Components

All components utilizing the current Neumorphism design system (e.g., buttons, cards, modals) are affected by this issue. 

### Example SCSS Causing Accessibility Issues

The below code from the `neumorphism.scss` file demonstrates the problem, where light and dark color contrast is dynamically generated but often fails to meet the contrast requirements.

```scss
@mixin neu($light-source: top left, $light: #e2cece, $dark: #4faa92) {
    $shadow-light: if(lightness($light) > lightness($dark), $neu-shadow-dark, $neu-shadow-light);
    $shadow-dark: if(lightness($light) > lightness($dark), $neu-shadow-light, $neu-shadow-dark);

    $contrast-ratio: contrast($dark, $light);
  
    @if $contrast-ratio < 4.5 {
        $light: #ffffff; // Fallback to white if contrast is too low
    }

    box-shadow:
        $shadow-light + $neu-shadow-x + $neu-shadow-y + $neu-blur $dark,
        $shadow-dark + $neu-shadow-x + $neu-shadow-y + $neu-blur $light;
}
```

### Root Causes

- Neumorphism relies heavily on subtle shadowing and soft gradients, which may not provide enough contrast for some users.
- Color contrast between the background and the elements often falls short, especially in dark mode or with certain UI color combinations like `$ui-glossy-taupe` and `$ui-glossy-pink`.

## Proposed Solution

1. **Contrast Mode for Neumorphism:**  
   Introduce a contrast mode that dynamically adjusts colors based on the existing color palette, ensuring a minimum contrast ratio of 4.5:1 for all UI components.

2. **Improved Color Selection:**  
   Implement stricter contrast checks and fallback colors in both the Neumorphism and global SCSS files. For instance, `$ux-success-active` and `$ui-fisher-blue` should be recalibrated for better accessibility.

3. **Testing Across Light and Dark Themes:**  
   Ensure that components behave well in both light and dark modes by adding automated tests for contrast checks in each mode.