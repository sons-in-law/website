"""
threecommas.ai — Award-Winning Splash Screen Animation
======================================================
A sophisticated, warm, and refined logo reveal that captures the essence
of "AI that works for humans" — technology that feels approachable, not cold.

Design Concept: "The Ink Flow"
- Organic calligraphic reveal suggesting craftsmanship
- Subtle particle system representing connection and automation
- Special treatment for ".ai" with terracotta warmth
- Minimalist yet rich with intentional details
"""

from manim import *
import numpy as np

# Brand Colors
PARCHMENT = "#FFFFFF"  # Pure white for seamless splash screen
PARCHMENT_DARK = "#F5F2ED"
INK = "#1A1918"
INK_MUTED = "#5C5955"
TERRACOTTA = "#C85D42"
TERRACOTTA_GLOW = "#D87055"


class InkParticle(Dot):
    """A subtle ink particle that floats and fades"""
    def __init__(self, position, **kwargs):
        super().__init__(
            point=position,
            radius=0.015,
            color=INK,
            fill_opacity=0.3,
            **kwargs
        )


class SplashScreen(Scene):
    """
    The main award-winning splash animation.

    Animation Timeline:
    1. Fade in warm parchment atmosphere (0.5s)
    2. Draw brand name with elegant ink flow (2s)
    3. Reveal ".ai" with terracotta accent glow (1s)
    4. Subtle particle emergence suggesting connection (0.8s)
    5. Gentle settling pulse (0.5s)
    6. Hold for impact (0.7s)
    """

    def construct(self):
        # Set background
        self.camera.background_color = PARCHMENT

        # ═══════════════════════════════════════════════════════════════
        # PHASE 1: Create the typography elements
        # ═══════════════════════════════════════════════════════════════

        # Main brand text - split for special ".ai" treatment
        main_text = Text(
            "threecommas",
            font="Georgia",  # Elegant serif
            font_size=72,
            color=INK,
            weight=NORMAL,
        )

        # The ".ai" with special treatment
        ai_text = Text(
            ".ai",
            font="Georgia",
            font_size=72,
            color=TERRACOTTA,
            weight=NORMAL,
        )

        # Position ".ai" next to main text with generous spacing
        ai_text.next_to(main_text, RIGHT, buff=0.3)

        # Group for unified positioning
        full_logo = VGroup(main_text, ai_text)
        full_logo.move_to(ORIGIN)

        # Subtle tagline
        tagline = Text(
            "AI Automation Consultancy",
            font="Helvetica Neue",
            font_size=18,
            color=INK_MUTED,
            weight=LIGHT,
        )
        tagline.next_to(full_logo, DOWN, buff=0.5)
        tagline.set_opacity(0)

        # ═══════════════════════════════════════════════════════════════
        # PHASE 2: Create decorative elements
        # ═══════════════════════════════════════════════════════════════

        # Elegant underline that draws beneath the logo
        underline = Line(
            start=LEFT * 2.5,
            end=RIGHT * 2.5,
            color=INK,
            stroke_width=1,
            stroke_opacity=0.2,
        )
        underline.next_to(full_logo, DOWN, buff=0.25)

        # Subtle connection dots (representing automation/connection)
        connection_dots = VGroup()
        dot_positions = [
            LEFT * 3.2 + UP * 0.1,
            RIGHT * 3.2 + UP * 0.1,
            LEFT * 3.5 + DOWN * 0.3,
            RIGHT * 3.5 + DOWN * 0.3,
        ]
        for pos in dot_positions:
            dot = Dot(
                point=pos,
                radius=0.03,
                color=TERRACOTTA,
                fill_opacity=0,
            )
            connection_dots.add(dot)

        # ═══════════════════════════════════════════════════════════════
        # PHASE 3: The Animation Sequence
        # ═══════════════════════════════════════════════════════════════

        # --- Stage 1: Atmospheric fade in with grain texture simulation ---
        # Create subtle ambient particles
        ambient_particles = VGroup()
        np.random.seed(42)  # Reproducible randomness
        for _ in range(15):
            x = np.random.uniform(-5, 5)
            y = np.random.uniform(-3, 3)
            particle = Dot(
                point=[x, y, 0],
                radius=np.random.uniform(0.005, 0.02),
                color=INK,
                fill_opacity=np.random.uniform(0.02, 0.06),
            )
            ambient_particles.add(particle)

        self.play(
            FadeIn(ambient_particles, run_time=0.4),
            rate_func=smooth,
        )

        # --- Stage 2: Elegant ink-flow text reveal ---
        # Create the "writing" effect by animating each character
        main_text.set_opacity(0)
        self.add(main_text)

        # Reveal characters with a flowing, calligraphic feel
        self.play(
            LaggedStart(
                *[
                    char.animate.set_opacity(1)
                    for char in main_text
                ],
                lag_ratio=0.08,
                run_time=1.8,
            ),
            rate_func=smooth,
        )

        # --- Stage 3: The ".ai" reveal with smooth fade ---
        ai_text.set_opacity(0)
        self.add(ai_text)

        # Smooth fade in for .ai
        self.play(
            ai_text.animate.set_opacity(1),
            run_time=1.0,
            rate_func=smooth,
        )

        # --- Stage 4: Elegant underline draw ---
        underline_start = underline.copy()
        underline_start.scale(0, about_point=underline.get_center())

        self.play(
            Create(underline),
            run_time=0.6,
            rate_func=smooth,
        )

        # --- Stage 5: Connection dots fade in ---
        self.play(
            *[dot.animate.set_opacity(0.4) for dot in connection_dots],
            run_time=0.5,
            rate_func=smooth,
        )

        # --- Stage 6: Tagline reveal ---
        self.play(
            tagline.animate.set_opacity(0.6),
            run_time=0.6,
            rate_func=smooth,
        )

        # --- Stage 7: Subtle settling pulse ---
        logo_group = VGroup(main_text, ai_text)
        self.play(
            logo_group.animate.scale(1.02),
            rate_func=there_and_back,
            run_time=0.4,
        )

        # --- Stage 8: Hold for impact ---
        self.wait(0.8)


class SplashScreenMinimal(Scene):
    """
    A more minimal version - just the essential logo animation.
    Perfect for loading screens and quick reveals.
    """

    def construct(self):
        self.camera.background_color = PARCHMENT

        # Brand text
        brand = Text(
            "threecommas.ai",
            font="Georgia",
            font_size=64,
            color=INK,
        )

        # Color the ".ai" portion
        # Georgia renders as single text, so we overlay
        ai_overlay = Text(
            ".ai",
            font="Georgia",
            font_size=64,
            color=TERRACOTTA,
        )

        # Position the overlay precisely
        brand_width = brand.width
        ai_overlay.move_to(brand.get_right() + LEFT * ai_overlay.width/2 + LEFT * 0.05)

        # Create mask effect
        mask_rect = Rectangle(
            width=ai_overlay.width + 0.1,
            height=ai_overlay.height + 0.2,
            color=PARCHMENT,
            fill_opacity=1,
            stroke_width=0,
        ).move_to(ai_overlay)

        # Elegant reveal animation
        brand.set_opacity(0)

        self.play(
            FadeIn(brand, shift=UP * 0.2, scale=0.95),
            run_time=1.2,
            rate_func=smooth,
        )

        # Subtle pulse
        self.play(
            brand.animate.scale(1.03),
            rate_func=there_and_back,
            run_time=0.5,
        )

        self.wait(0.6)


class SplashScreenPremium(Scene):
    """
    The premium, award-winning version with sophisticated particle effects
    and refined micro-animations.
    """

    def construct(self):
        self.camera.background_color = PARCHMENT

        # ═══════════════════════════════════════════════════════════════
        # Typography Setup
        # ═══════════════════════════════════════════════════════════════

        main_part = Text(
            "threecommas",
            font="Georgia",
            font_size=80,
            color=INK,
        )

        ai_part = Text(
            ".ai",
            font="Georgia",
            font_size=80,
            color=TERRACOTTA,
        )

        ai_part.next_to(main_part, RIGHT, buff=0.3)
        logo = VGroup(main_part, ai_part).move_to(ORIGIN)

        # Refined underline
        underline = Line(
            LEFT * 2.8, RIGHT * 2.8,
            stroke_width=0.5,
            color=INK,
            stroke_opacity=0.15,
        ).next_to(logo, DOWN, buff=0.35)

        # ═══════════════════════════════════════════════════════════════
        # Particle System - Flowing ink particles
        # ═══════════════════════════════════════════════════════════════

        np.random.seed(42)

        # Create flowing particles that converge to form the logo
        particles = VGroup()
        particle_count = 40

        for i in range(particle_count):
            # Start positions - scattered around
            angle = np.random.uniform(0, 2 * np.pi)
            radius = np.random.uniform(3, 5)
            start_x = radius * np.cos(angle)
            start_y = radius * np.sin(angle)

            particle = Dot(
                point=[start_x, start_y, 0],
                radius=np.random.uniform(0.01, 0.025),
                color=INK if i < particle_count * 0.7 else TERRACOTTA,
                fill_opacity=0,
            )
            particles.add(particle)

        # ═══════════════════════════════════════════════════════════════
        # Animation Sequence
        # ═══════════════════════════════════════════════════════════════

        # --- Phase 1: Particles fade in at edges ---
        self.play(
            *[p.animate.set_opacity(np.random.uniform(0.1, 0.3)) for p in particles],
            run_time=0.5,
            rate_func=smooth,
        )

        # --- Phase 2: Particles flow inward while logo reveals ---
        main_part.set_opacity(0)
        ai_part.set_opacity(0)
        self.add(main_part, ai_part)

        # Calculate target positions near the logo
        target_positions = []
        for i, p in enumerate(particles):
            target_x = np.random.uniform(-2.5, 2.5)
            target_y = np.random.uniform(-0.5, 0.5)
            target_positions.append([target_x, target_y, 0])

        # Simultaneous particle flow and text reveal
        self.play(
            *[
                particles[i].animate.move_to(target_positions[i]).set_opacity(0.05)
                for i in range(len(particles))
            ],
            LaggedStart(
                *[char.animate.set_opacity(1) for char in main_part],
                lag_ratio=0.06,
            ),
            run_time=2.0,
            rate_func=smooth,
        )

        # --- Phase 3: .ai reveal - clean smooth fade ---
        # Simple, elegant fade in without glow effects
        self.play(
            ai_part.animate.set_opacity(1),
            run_time=1.0,
            rate_func=smooth,
        )

        # --- Phase 3.5: Hold after .ai reveal for impact ---
        self.wait(1.5)

        # --- Phase 4: Underline draw ---
        self.play(
            Create(underline),
            run_time=0.5,
            rate_func=smooth,
        )

        # --- Phase 5: Particles disperse outward and fade ---
        final_positions = []
        for i, p in enumerate(particles):
            angle = np.random.uniform(0, 2 * np.pi)
            radius = np.random.uniform(4, 6)
            final_positions.append([
                radius * np.cos(angle),
                radius * np.sin(angle),
                0
            ])

        self.play(
            *[
                particles[i].animate.move_to(final_positions[i]).set_opacity(0)
                for i in range(len(particles))
            ],
            run_time=1.0,
            rate_func=smooth,
        )

        # --- Phase 6: Subtle breathing pulse ---
        self.play(
            logo.animate.scale(1.015),
            rate_func=there_and_back,
            run_time=0.5,
        )

        # --- Phase 7: Hold ---
        self.wait(0.7)


# Export for easy rendering
if __name__ == "__main__":
    print("Render commands:")
    print("  GIF (web):    manim -ql --format gif splash_animation.py SplashScreenPremium")
    print("  WebM (best):  manim -qm --format webm splash_animation.py SplashScreenPremium")
    print("  MP4 (video):  manim -qh splash_animation.py SplashScreenPremium")
