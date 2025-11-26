{
    "duration": "60 seconds",
    "format": "landscape",
    "goal": "Create a visually rich and deeply detailed 60-second educational video explaining how Monte Carlo simulations solve real-world problems, using multiple fields and focusing deeply on one domain (finance) with math and pseudo-code.",
    "style": {
      "visual_style": "modern cinematic educational style, smooth transitions, clean diagrams, animated graphs, code overlays, particle-style randomness visuals",
      "narration_style": "clear, confident, intuitive; explains concepts while visuals illustrate progressively",
      "text_on_screen": "minimal but reinforcing key equations, terms, and definitions"
    },
    "structure": [
      {
        "time": "0-5s",
        "scene": "Opening montage: particles moving randomly, dice rolling, stock price line jittering, traffic cars moving with variability. Smooth transitions between scenes.",
        "narration": "Monte Carlo simulations help us solve problems by using randomness when exact answers are too difficult to compute."
      },
      {
        "time": '5-12s',
        "scene": "Icons or mini-scenes representing: finance charts, weather patterns, traffic flow maps, board game dice.",
        "narration": "They’re used everywhere — finance, traffic modeling, weather forecasting, even simulating games and dice rolls.",
        "text": "Monte Carlo = Random Scenarios to Understand Reality"
      },
      {
        "time": "12-20s",
        "scene": "Split-screen: Left side shows an equation or model that looks complex; right side shows thousands of random trials being simulated.",
        "narration": "Monte Carlo helps us estimate things we can’t measure directly, and model uncertainty in systems full of randomness.",
        "equations_on_screen": [
          "Estimate ≈ Average of Many Random Trials",
          "Uncertainty → Simulated With Random Variables"
        ]
      },
      {
        "time": "20-28s",
        "scene": "Overview: Rapid demonstrations of various use cases.",
        "narration": "People use Monte Carlo because it's easy to run many random scenarios, and the average of thousands of trials leads to reliable predictions.",
        "visuals": [
          "Weather: Clouds forming from many random turbulence paths",
          "Traffic: Cars moving with randomized delays",
          "Games: Dice histogram converging to expected probabilities"
        ]
      },
      {
        "time": "28-36s",
        "scene": "Transition zoom into the finance sector. Show a 3D stock price chart with random walk paths branching out.",
        "narration": "Let’s focus on one example: finance. Here Monte Carlo predicts possible future stock prices using a model of randomness.",
        "equations_on_screen": [
          "S(t+Δt) = S(t) × e^{(μ − σ²/2)Δt + σ√Δt · Z}",
          "Z ~ Normal(0,1)"
        ]
      },
      {
        "time": "36-46s",
        "scene": "Show detailed breakdown: the equation animates step-by-step. Highlight drift (μ), volatility (σ), random shock (Z). Random paths overlay in semi-transparent lines.",
        "narration": "This equation simulates price changes: drift represents average growth, volatility controls randomness, and Z is a normally distributed surprise factor. Running this many times generates many possible futures.",
        "text": "Random Paths → Price Distribution"
      },
      {
        "time": "46-54s",
        "scene": "Show pseudo-code overlay floating beside graphs. Simulated stock paths appear rapidly.",
        "narration": "A Monte Carlo model in code simply repeats the process thousands of times.",
        "code_on_screen": [
          "for trial in range(N):",
          "    price = S0",
          "    for step in range(T):",
          "         Z = random.normal(0,1)",
          "         price *= exp((mu - sigma**2/2)*dt + sigma*sqrt(dt)*Z)",
          "    results.append(price)"
        ]
      },
      {
        "time": "54-60s",
        "scene": "Final summary: graph of distribution tightening as trial count increases, showing convergence. Visual emphasis on the power of many trials.",
        "narration": "The more random trials we run, the better our estimate becomes. That’s the power of Monte Carlo simulation — using randomness to reveal insight.",
        "text": "Monte Carlo = Randomness → Many Trials → Insight"
      }
    ],
    "audio": {
      "music": "soft cinematic educational background music",
      "sound_effects": "subtle whoosh transitions; faint typing sounds for code section"
    },
    "requirements": {
      "must_include": [
        "60-second runtime",
        "landscape orientation",
        "multiple application domains",
        "deep focus on finance with equations and pseudo-code",
        "clear explanation of uncertainty and many trials",
        "visual representation of random scenarios"
      ],
      "avoid": [
        "fast confusing transitions",
        "overly dense text",
        "dark or cluttered visuals"
      ]
    }
  }
  