g# Component Issue: Neumorphism Accessibility Concerns

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

The following code snippet from the `neumorphism.scss` file demonstrates the problem, where dynamically generated light and dark color contrast often fails to meet the required WCAG contrast standards.

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

- Neumorphism heavily relies on subtle shadowing and soft gradients, which may not provide enough contrast for users with visual impairments.
- Color contrast between the background and elements often falls short, particularly in dark mode or when using certain UI color combinations like `$ui-glossy-taupe` and `$ui-glossy-pink`.

---

## Proposed Solutions

To address the accessibility concerns with Neumorphism, the following solutions are proposed:

### 1. **Implement a Contrast Mode for Neumorphism**

Introduce a contrast mode that dynamically adjusts colors based on the existing color palette, ensuring a minimum contrast ratio of 4.5:1 for all UI components. The color adjustments will apply to both light and dark themes, automatically adapting to meet accessibility standards.

```scss
@mixin contrast-neu($light, $dark) {
    $contrast-ratio: contrast($dark, $light);

    @if $contrast-ratio < 4.5 {
        $light: lighten($light, 20%); // Brighten the light color
        $dark: darken($dark, 20%); // Darken the shadow color
    }

    box-shadow:
        10px 10px 20px $dark, 
        -10px -10px 20px $light;
}
```

### 2. **Improved Color Selection and Contrast Fallbacks**

Enforce stricter contrast checks and apply fallback colors when necessary. For instance, colors like `$ux-success-active` and `$ui-fisher-blue` should be recalibrated for better contrast in different themes. This ensures that all UI components meet the required WCAG standards.

```scss
@mixin check-contrast($color, $background) {
    $contrast-ratio: contrast($color, $background);

    @if $contrast-ratio < 4.5 {
        $color: adjust-hue($color, 15); // Adjust hue for better contrast
    }

    color: $color;
}
```

### 3. **Testing Across Light and Dark Themes**

Ensure that the Neumorphism components behave well across both light and dark themes by integrating automated contrast checks in testing. This can be achieved by running visual regression tests on each component in both modes to verify they meet the contrast requirements.

- **Automated Tests for Contrast Ratios:** Set up automated tests to verify the contrast ratios of all Neumorphism components in different themes, ensuring WCAG compliance.
- **Visual Regression Testing:** Use tools like Storybook with contrast add-ons or automated UI testing suites to ensure the designs are accessible across all themes.

---

## Conclusion

By implementing a contrast mode, improving color selection with stricter contrast checks, and ensuring thorough testing across light and dark themes, we can resolve the accessibility issues in the current Neumorphism design system. These changes will make Draft Components more accessible and compliant with WCAG standards, improving the user experience for all users, including those with visual impairments.

