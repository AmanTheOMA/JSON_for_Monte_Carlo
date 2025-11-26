{
    "duration": "60 seconds",
    "format": "landscape",
    "goal": "Produce a classroom-style 60-second video that clearly teaches the structure of a Monte Carlo simulation in code. Use flowchart animations and step-by-step code snippets (Python-style) while visually demonstrating the example of estimating π by random sampling. Make the video feel like a short tutorial—fast-paced but pedagogical, with emphasis on each code section and what it does.",
    "style": {
      "visual_style": "clean, modern educational UI (cards, flowchart arrows, highlighted code blocks), smooth step-by-step animations, high-contrast callouts for important lines, subtle particle/random-dot visualizations",
      "narration_style": "teacherly, deliberate, explanatory (short sentences), guiding the viewer through code and visuals",
      "text_on_screen": "concise, line-by-line highlighting for code; use captions for key concepts and short tooltips on flowchart nodes"
    },
    "structure": [
      {
        "time": "0-4s",
        "scene": "Quick title card: 'How Monte Carlo Works in Code' — brief visual of a flowchart node labeled 'Define problem' with a blinking cursor.",
        "narration": "Let's walk through a Monte Carlo simulation in code, step by step."
      },
      {
        "time": "4-10s",
        "scene": "Show the full flowchart centered: 1) Define problem → 2) Generate random samples → 3) Test condition → 4) Count & average → 5) Report. Each node pulses as it's named.",
        "narration": "Every Monte Carlo follows the same structure: define, sample, test, count, average."
      },
      {
        "time": "10-20s",
        "scene": "Zoom into node 1 (Define problem). Show a simple card: 'Estimate π using random points in square.' Show on-screen: visual square + inscribed circle + initial variables S0, r, N.",
        "narration": "First: define the problem. Example: estimate pi by dropping random points in a square and checking whether they land inside the circle."
      },
      {
        "time": "20-30s",
        "scene": "Zoom into node 2 (Generate random samples). Show code block (Python-like) with line-by-line highlight and an animation of points being generated in the square. Points spawn rapidly; counter increments.",
        "code_on_screen": [
          "import random",
          "def sample_point():",
          "    x = random.uniform(-1,1)",
          "    y = random.uniform(-1,1)",
          "    return x, y",
          "",
          "for i in range(N):",
          "    x, y = sample_point()",
          "    # visualize point"
        ],
        "narration": "Next: generate random samples. In code we draw x and y uniformly across the square. Computers can do this thousands or millions of times per second."
      },
      {
        "time": "30-38s",
        "scene": "Zoom into node 3 (Test condition). Show point checking animation: a single point highlighted, check x*x + y*y <= 1. Show condition evaluation with true/false paths in the flowchart.",
        "code_on_screen": [
          "def inside_circle(x,y):",
          "    return x*x + y*y <= 1"
        ],
        "narration": "Test whether each point is inside the circle. In code: check if x squared plus y squared is less than or equal to the radius squared."
      },
      {
        "time": "38-48s",
        "scene": "Zoom into node 4 (Count & average). Show a small snippet that increments counters; on-screen bar counters update (inside_count, total). Then show calculation of pi estimate and running average as a line graph that smooths with more trials.",
        "code_on_screen": [
          "inside = 0",
          "for i in range(1, N+1):",
          "    x, y = sample_point()",
          "    if inside_circle(x,y):",
          "        inside += 1",
          "    pi_estimate = 4 * inside / i  # running estimate"
        ],
        "narration": "Count the successes and compute the running average. Each trial updates the estimate: pi ≈ 4 × inside/total. The running graph shows convergence as N grows."
      },
      {
        "time": "48-54s",
        "scene": "Show an annotated code block with vectorized/batch-style optimization and mention pseudo-code for using numpy or parallel runs. Visualize many paths computed simultaneously as many thin lines or many dot-frames.",
        "code_on_screen": [
          "# faster (vectorized) approach",
          "import numpy as np",
          "N = 1_000_000",
          "x = np.random.uniform(-1,1,N)",
          "y = np.random.uniform(-1,1,N)",
          "inside = np.sum(x*x + y*y <= 1)",
          "pi = 4 * inside / N"
        ],
        "narration": "To scale up, we vectorize or run parallel trials. Libraries like NumPy generate millions of samples fast—this reduces runtime and gives more accurate averages."
      },
      {
        "time": "54-58s",
        "scene": "Show a short snippet explaining variance and confidence: overlay text 'Estimate ± error' and show the error shrinking as trial count increases; visualize error bars narrowing.",
        "equations_on_screen": [
          "StdError ≈ sqrt(p(1-p)/N)",
          "Confidence → estimate ± z * StdError"
        ],
        "narration": "We can also estimate uncertainty. Error shrinks like 1/√N, so more samples give tighter confidence intervals."
      },
      {
        "time": "58-60s",
        "scene": "Final card: full flowchart fades back in with 'Run, Learn, Repeat' caption; show final pi_estimate number stabilizing. Quick CTA text: 'Try it yourself — one function at a time.'",
        "narration": "In short: define, sample, test, count, average. That’s Monte Carlo in code—simple building blocks that scale to hard problems."
      }
    ],
    "audio": {
      "music": "focused, upbeat educational background track (subtle)",
      "sound_effects": "soft ticks for loop iterations, gentle chime when the estimate improves significantly"
    },
    "requirements": {
      "must_include": [
        "60-second runtime",
        "landscape orientation",
        "clear visual flowchart of the Monte Carlo steps",
        "step-by-step highlighted code (Python preferred) that viewers can follow",
        "live visualization of random dots in a square and checks for inside-circle",
        "vectorized/optimized code snippet showing scaling (NumPy example)",
        "brief explanation of error/variance and 1/sqrt(N) relationship",
        "teacherly narration that explains each line of code"
      ],
      "avoid": [
        "overly verbose theory or long derivations",
        "showing full large code files — keep snippets focused and readable",
        "fast jump cuts that break the tutorial flow",
        "heavy text blocks without animation"
      ]
    },
    "extra_notes": {
      "presentation": "Highlight one code line at a time while that line is narrated. When showing loops, animate points spawning in sync with the loop ticks. Use color coding: sample generation (green), test/condition (yellow), counting & averaging (blue).",
      "downloadable_asset": "Include an optional small on-screen QR or short link to a downloadable gist with the full example code (plain text) for viewers who want to try it after watching."
    }
  }
  