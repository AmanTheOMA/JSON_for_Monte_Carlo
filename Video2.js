Part 1:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "How Monte Carlo Works in Code — Part 1: Setting Up the Problem",
  "style": "dark-blue analytic theme, animated flowcharts, glowing code blocks",
  "scenes": [
    {
      "type": "intro",
      "visuals": {
        "text": "How Monte Carlo Works in Code",
        "animation": "title emerges from a grid of random particles"
      },
      "voiceover": "To understand Monte Carlo computationally, we break the process into clear steps that any computer program can follow."
    },
    {
      "type": "flowchart",
      "visuals": {
        "animation": "flowchart fades in piece-by-piece",
        "nodes": [
          "Define the Problem",
          "Generate Random Samples",
          "Test Each Sample",
          "Count Results",
          "Compute Final Estimate"
        ]
      },
      "voiceover": "This flowchart outlines the universal structure of any Monte Carlo simulation."
    },
    {
      "type": "problem_definition",
      "visuals": {
        "animation": "unit circle and square appear, code snippet floats beside it",
        "code_snippet": "def estimate_pi(num_samples):\n    # Monte Carlo structure begins here"
      },
      "voiceover": "Step one: define the problem. For example, estimating π. We prepare variables, functions, and the structure the simulation will follow."
    },
    {
      "type": "transition",
      "visuals": {
        "animation": "camera zooms into code block"
      },
      "voiceover": "Next, we generate thousands of random samples — the heart of Monte Carlo — in part 2."
    }
  ]
}


Part 2:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "How Monte Carlo Works in Code — Part 2: Generating Random Samples",
  "style": "dark-blue analytic theme, glowing particle animations",
  "scenes": [
    {
      "type": "code_intro",
      "visuals": {
        "animation": "python-style code lines float onto the screen",
        "code_snippet": "import random\nx = random.random()\ny = random.random()"
      },
      "voiceover": "In code, generating random samples usually means using functions that return random numbers between zero and one."
    },
    {
      "type": "visualization",
      "visuals": {
        "animation": "as x,y are generated, dots appear inside a square",
        "text": "Random point → (x, y)"
      },
      "voiceover": "Each pair of random values forms a point within the square. The computer repeats this quickly thousands or millions of times."
    },
    {
      "type": "teaching_moment",
      "visuals": {
        "animation": "highlighted code logic loops",
        "code_snippet": "for i in range(num_samples):\n    x = random.random()\n    y = random.random()"
      },
      "voiceover": "A loop lets the computer automate the process — producing sample after sample at high speed."
    },
    {
      "type": "transition",
      "visuals": {
        "animation": "dots begin glowing blue if inside circle, white if outside"
      },
      "voiceover": "But generating points is not enough — the next step is testing each one. That’s part 3."
    }
  ]
}


Part 3:

{
  "format": "1080p_landscape",
  "duration": 60,
  "title": "How Monte Carlo Works in Code — Part 3: Testing and Computing Results",
  "style": "dark-blue analytic theme, clear math visuals",
  "scenes": [
    {
      "type": "condition_test",
      "visuals": {
        "equation": "x^2 + y^2 ≤ 1",
        "animation": "point lights up blue when inside circle"
      },
      "voiceover": "To test if a point is inside the circle, we compute x squared plus y squared. If it’s less than or equal to one, the point is inside."
    },
    {
      "type": "code_overlay",
      "visuals": {
        "code_snippet": "if x*x + y*y <= 1:\n    inside_count += 1"
      },
      "voiceover": "The code keeps a counter of how many points fall inside. This ratio becomes the foundation of our estimate."
    },
    {
      "type": "final_computation",
      "visuals": {
        "equation_large": "π ≈ 4 × (inside_count / total_samples)",
        "animation": "ratio stabilizes toward 3.14"
      },
      "voiceover": "The fraction of inside points multiplied by four gives an increasingly accurate estimate of π as the number of samples grows."
    },
    {
      "type": "closing",
      "visuals": {
        "animation": "code scrolls upward and dissolves"
      },
      "voiceover": "This structure — generate, test, count, estimate — is the backbone of all Monte Carlo simulations."
    }
  ]
}

  
