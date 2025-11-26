{
    "duration": "60 seconds",
    "format": "landscape",
    "goal": "Create a visually rich 60-second educational video that explains the simple math behind Monte Carlo simulation with minimal introduction and maximum mathematical intuition. Use visual metaphors, pi-estimation examples, randomness animations, and the law of large numbers to clearly show why averages converge to truth.",
    "style": {
      "visual_style": "clean, modern, soft gradients, animated graphs, smooth transitions, gentle motion graphics, educational YouTube explainer quality",
      "narration_style": "clear, intuitive, friendly but mathematically focused",
      "text_on_screen": "light reinforcement, highlight equations and key terms visually"
    },
    "structure": [
      {
        "time": "0-4s",
        "scene": "Immediate visual start: hundreds of random dots appearing inside a square with a circle inside it. No long intro. Counter displays sample size growing rapidly: 1, 10, 50, 100...",
        "narration": "Monte Carlo works because every random test gives us a tiny piece of information."
      },
      {
        "time": "4-12s",
        "scene": "Zoom-in on the dots. Some turn blue if they fall inside the circle, others grey if outside. Ratio meter animates in real time.",
        "narration": "When we collect many of these random samples, their average starts revealing a pattern — something meaningful.",
        "text": "Information from Random Samples"
      },
      {
        "time": "12-20s",
        "scene": "Side-by-side panels: left shows very few dots giving unstable pi estimates jumping around wildly; right shows many dots converging smoothly.",
        "narration": "With only a few samples, results jump around. But as we gather more, the estimate stabilizes and gets closer to the truth."
      },
      {
        "time": "20-30s",
        "scene": "Introduce an overlay of the basic pi estimation equation. The equation animates gently, not too formal.",
        "narration": "Even with a bit of math, the idea stays simple: the fraction of points inside the circle approaches a predictable value.",
        "equations_on_screen": [
          "π ≈ 4 × (points_in_circle / total_points)",
          "x² + y² ≤ r²"
        ]
      },
      {
        "time": "30-40s",
        "scene": "Transition to pure randomness visuals: coins flipping, dice scattering, random numbers flowing like a stream.",
        "narration": "This happens because randomness behaves predictably when repeated many times — a powerful idea called the law of large numbers.",
        "text": "Law of Large Numbers"
      },
      {
        "time": "40-48s",
        "scene": "Visual example: 10 coin flips produce uneven results; 100 flips produce closer-to-even results; 10,000 flips stabilize at roughly 50/50. Show bar charts tightening as sample size increases.",
        "narration": "If you flip a coin ten times, your results vary wildly. But flip it ten thousand times, and the average becomes very close to fifty-fifty."
      },
      {
        "time": "48-55s",
        "scene": "Return to the pi visualization but now with a huge number of points flooding in. A graph of estimation error shrinks toward zero.",
        "narration": "Monte Carlo leans on this idea: the more random trials we run, the closer our average gets to the true value.",
        "text": "More Samples → Better Estimates"
      },
      {
        "time": "55-60s",
        "scene": "Final synthesis: combine dots, randomness, and an equation overlay. Smooth animation showing many trials converging to a stable value.",
        "narration": "In the end, Monte Carlo isn’t about exact math — it’s about trusting that large numbers reveal the truth.",
        "text": "Monte Carlo = Randomness + Averages + Lots of Trials"
      }
    ],
    "audio": {
      "music": "gentle educational background music",
      "sound_effects": "light clicks or pops as random points appear"
    },
    "requirements": {
      "must_include": [
        "60 seconds total",
        "landscape orientation",
        "heavy focus on mathematical intuition",
        "pi example with dots",
        "coin flip example for law of large numbers",
        "at least one real-world equation",
        "emphasis on averaging and convergence"
      ],
      "avoid": [
        "long introduction",
        "too much text",
        "overly formal mathematical derivations",
        "non-math-related examples"
      ]
    }
  }
  