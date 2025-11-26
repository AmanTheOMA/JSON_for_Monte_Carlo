{
    "duration": "60 seconds",
    "format": "landscape",
    "goal": "Create a highly detailed 60-second educational video explaining Monte Carlo Simulation with strong visuals, equations, and intuitive examples.",
    "style": {
      "visual_style": "clean, modern, cinematic educational explainer; smooth animations; clear diagrams; bright colors; slow-paced visual reveals",
      "narration_style": "friendly, clear, concise but informative; guiding the viewer through visual intuition",
      "text_on_screen": "minimal but helpful; highlight equations and key terms only when needed"
    },
    "structure": [
      {
        "time": "0-5s",
        "scene": "Opening shot of a glowing roulette wheel spinning like in a casino, transitioning into abstract randomness visuals (floating numbers 0–1).",
        "narration": "Monte Carlo Simulation is a way of solving tough problems using randomness.",
        "text": "Monte Carlo = Using Randomness"
      },
      {
        "time": "5-15s",
        "scene": "Zoom out from the roulette wheel into a stylized Monte Carlo Casino sign. Transition to a timeline showing the origin of the name.",
        "narration": "The method gets its name from the Monte Carlo casino, because randomness and probability are at its heart.",
        "text": "Named after Monte Carlo Casino"
      },
      {
        "time": "15-25s",
        "scene": "Show a 2D square with a circle inside it. Begin dropping random dots (uniformly distributed points). Points gradually fill the area.",
        "narration": "A classic example is estimating the number pi by dropping random points inside a square and seeing how many land inside the circle.",
        "equations_on_screen": [
          "pi ≈ 4 × (points_inside_circle / total_points)",
          "x^2 + y^2 ≤ r^2"
        ]
      },
      {
        "time": "25-40s",
        "scene": "Close-up animation showing a dot and checking if it satisfies x² + y² ≤ r². Ratio of blue (inside) to gray (outside) points updates in real time. A numerical counter increments.",
        "narration": "If a point’s coordinates satisfy x² + y² ≤ r², it’s inside the circle. The more points we simulate, the closer our estimate of pi becomes."
      },
      {
        "time": "40-50s",
        "scene": "Transition to real-world examples: stock price paths simulated randomly, particles moving randomly, risk analysis graphs, all animated in a clean and modern style.",
        "narration": "Monte Carlo methods are powerful because randomness helps approximate answers when exact math is too hard or impossible.",
        "equations_on_screen": [
          "S(t+Δt) = S(t) × e^{(μ − σ²/2)Δt + σ√Δt·Z}",
          "Expected Value ≈ Average of Many Random Trials"
        ]
      },
      {
        "time": "50-60s",
        "scene": "Return to the point-dropping visualization. Dots rapidly fill in until the value of pi stabilizes. Show a clean final summary animation.",
        "narration": "By using random samples, Monte Carlo Simulation reveals patterns and numerical answers through probability. The more randomness we generate, the clearer the answer becomes.",
        "text": "Monte Carlo = Randomness → Approximation → Insight"
      }
    ],
    "audio": {
      "music": "soft educational background music",
      "sound_effects": "subtle click sounds as points appear, optional"
    },
    "requirements": {
      "must_include": [
        "60 second runtime",
        "landscape orientation",
        "real mathematical equations",
        "clear visual demonstrations of randomness",
        "Pi-estimation example using dots",
        "Casino origin reference"
      ],
      "avoid": [
        "fast cuts",
        "heavy text",
        "overly abstract visuals without explanation"
      ]
    }
  }
  
  