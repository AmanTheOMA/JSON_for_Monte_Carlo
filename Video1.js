Part 1:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "Monte Carlo Simulation — Part 1: The Core Idea",
  "style": "clean, modern, dark-blue analytic theme, floating particles, smooth animations",
  "scenes": [
    {
      "type": "intro",
      "visuals": {
        "text": "What Is Monte Carlo Simulation?",
        "animation": "random dots appearing on screen and forming the title",
        "bg": "dark analytic grid"
      },
      "voiceover": "Monte Carlo Simulation is a way of using randomness to solve problems that are too difficult, too complex, or too time-consuming to solve exactly."
    },
    {
      "type": "visual_explanation",
      "visuals": {
        "animation": "camera zooms into dots bouncing around like particles",
        "text": "Monte Carlo = Randomness used to find answers"
      },
      "voiceover": "The core idea is simple: generate a lot of random outcomes, observe what happens, and use that to estimate a real result."
    },
    {
      "type": "history",
      "visuals": {
        "animation": "fade into an illustration of the Monte Carlo casino in Monaco",
        "overlays": ["roulette wheel", "dice", "playing cards drifting around"],
        "text": "Named after the Monte Carlo casino"
      },
      "voiceover": "It’s called 'Monte Carlo' because it resembles gambling — randomness, chance, and uncertainty."
    },
    {
      "type": "transition_out",
      "visuals": {
        "animation": "roulette wheel spins and dissolves into random dots on a graph"
      },
      "voiceover": "But randomness alone isn’t the magic — it’s how we use it. In part 2, we’ll see Monte Carlo in action with a famous example."
    }
  ]
}

Part 2:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "Monte Carlo Simulation — Part 2: Estimating Pi",
  "style": "consistent dark-blue analytic theme with floating dots",
  "scenes": [
    {
      "type": "setup",
      "visuals": {
        "animation": "a unit square appears, then a circle inscribed inside it",
        "labels": ["Square Area = 1", "Circle Area = π/4"]
      },
      "voiceover": "A classic Monte Carlo example: estimating π. Start with a square of area 1 and a circle inside it with area π⁄4."
    },
    {
      "type": "random_sampling",
      "visuals": {
        "animation": "thousands of random dots drop inside the square",
        "color_coding": {
          "inside_circle": "blue",
          "outside_circle": "white"
        }
      },
      "voiceover": "We drop random points into the square. If a point falls inside the circle, we count it. The fraction inside approximates the ratio of the areas."
    },
    {
      "type": "math_overlay",
      "visuals": {
        "equations": [
          "distance = sqrt(x^2 + y^2)",
          "if distance ≤ 1 → inside circle",
          "π ≈ 4 × (inside_points / total_points)"
        ]
      },
      "voiceover": "A point is inside when x² + y² ≤ 1. If half the dots land inside, we estimate π ≈ 4 × 0.5 = 2. But with thousands of dots, the estimate becomes much more accurate."
    },
    {
      "type": "transition",
      "visuals": {
        "animation": "dots blur, turning into a smooth curve approaching π=3.14159"
      },
      "voiceover": "This pattern emerging from randomness is the heart of Monte Carlo. In part 3, we explain why randomness can reveal real answers."
    }
  ]
}


Part 3:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "Monte Carlo Simulation — Part 3: Why Randomness Works",
  "style": "same theme: analytic blue, glowing equation overlays",
  "scenes": [
    {
      "type": "statistical_intuition",
      "visuals": {
        "animation": "graph showing estimate of pi fluctuating wildly with few samples, stabilizing with many",
        "text": "Law of Large Numbers"
      },
      "voiceover": "Monte Carlo works because of the Law of Large Numbers: with enough random samples, the average result approaches the true value."
    },
    {
      "type": "pattern_reveal",
      "visuals": {
        "animation": "dots gradually fill the square until the circle becomes visually clear",
        "side_by_side": "few samples vs many samples"
      },
      "voiceover": "At first, randomness looks messy. But with more samples, a stable pattern emerges — and that pattern reveals the answer."
    },
    {
      "type": "real_equation_context",
      "visuals": {
        "equations": [
          "π ≈ 4 × (N_inside / N_total)",
          "error ∝ 1 / √N"
        ]
      },
      "voiceover": "The accuracy improves slowly: error decreases roughly as one over the square root of the number of samples."
    },
    {
      "type": "closing",
      "visuals": {
        "animation": "random dots fade into a clean title card for the next video"
      },
      "voiceover": "Now that you understand the idea, let’s look at how Monte Carlo actually works inside code."
    }
  ]
}

  
  
