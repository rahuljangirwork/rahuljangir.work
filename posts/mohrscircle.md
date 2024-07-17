---
title: "Mohr's Circle"
date: "2020-01-01"
---

# Mohr's Circle

Mohr's Circle is a graphical representation of the state of stress at a point in a material. It is used in mechanical engineering, specifically in the field of machine design, to determine principal stresses, maximum shear stresses, and the orientations of these stresses.

## Construction of Mohr's Circle

To construct Mohr's Circle, follow these steps:

1. **Identify the Normal and Shear Stresses:**

   - Normal stresses ($\sigma_x$ and $\sigma_y$)
   - Shear stress ($\tau_{xy}$)

2. **Plot the Points:**

   - Plot the points $(\sigma_x, \tau_{xy})$ and $(\sigma_y, -\tau_{xy})$ on the Cartesian plane.

3. **Determine the Center and Radius:**

   - The center $C$ of Mohr's Circle is located at:
     $$
     C = \left( \frac{\sigma_x + \sigma_y}{2}, 0 \right)
     $$
   - The radius $R$ of Mohr's Circle is:
     $$
     R = \sqrt{\left( \frac{\sigma_x - \sigma_y}{2} \right)^2 + \tau_{xy}^2}
     $$

4. **Draw the Circle:**
   - With the center $C$ and radius $R$, draw Mohr's Circle.

## Principal Stresses

The principal stresses ($\sigma_1$ and $\sigma_2$) are found at the intersections of Mohr's Circle with the horizontal axis:

$$
\sigma_{1,2} = C \pm R
$$

## Maximum Shear Stress

The maximum shear stress ($\tau_{\text{max}}$) is the radius of Mohr's Circle:

$$
\tau_{\text{max}} = R
$$

## Orientation of Principal Stresses

The orientation $\theta_p$ of the principal stresses is given by:

$$
\tan(2\theta_p) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}
$$

## Example

Given:

- $\sigma_x = 50 \text{ MPa}$
- $\sigma_y = 30 \text{ MPa}$
- $\tau_{xy} = 20 \text{ MPa}$

1. **Center of Mohr's Circle:**

   $$
   C = \left( \frac{50 + 30}{2}, 0 \right) = (40, 0)
   $$

2. **Radius of Mohr's Circle:**

   $$
   R = \sqrt{\left( \frac{50 - 30}{2} \right)^2 + 20^2} = \sqrt{10^2 + 20^2} = \sqrt{100 + 400} = \sqrt{500} = 22.36 \text{ MPa}
   $$

3. **Principal Stresses:**

   $$
   \sigma_1 = 40 + 22.36 = 62.36 \text{ MPa}
   $$

   $$
   \sigma_2 = 40 - 22.36 = 17.64 \text{ MPa}
   $$

4. **Maximum Shear Stress:**
   $$
   \tau_{\text{max}} = 22.36 \text{ MPa}
   $$

Mohr's Circle provides a clear visual tool to understand the stresses at a point and is an essential concept in the analysis and design of mechanical components.
