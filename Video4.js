{
  "video": "How Monte Carlo Works in Code",
  "part": "Part 1",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-3","visual":"Start with a clean flowchart: Define → Sample → Test → Count → Average. Each node pulses.","narration":"Every Monte Carlo program follows the same structure: define, sample, test, count, average.","on_screen_text":"Define • Sample • Test • Count • Average"},
    {"time":"3-10","visual":"Zoom into 'Define' node. Show code header: def estimate_pi(N): SQUARE=[-1,1] etc. Visual: variable boxes for N, inside_count, total_count.","narration":"First, define the problem and variables. Here we’ll estimate π, so we set N and counter variables.","on_screen_text":"def estimate_pi(N):"},
    {"time":"10-22","visual":"Highlight 'Sample' node: show pseudocode and corresponding on-screen animation of sampling x=random.uniform(-1,1). Show uniform distribution bar with sampled point appearing.","narration":"Generate random samples: x = random.uniform(-1,1), y = random.uniform(-1,1). Each draw is one trial.","on_screen_text":"x = random.uniform(-1,1)"},
    {"time":"22-34","visual":"Highlight 'Test' node: animate check x*x + y*y <= 1. Show code: if x*x + y*y <= 1: inside += 1. Visual: point lights blue if inside.","narration":"Test the condition (x²+y²≤1). If true, increment inside counter.","on_screen_text":"if x*x + y*y <= 1: inside += 1"},
    {"time":"34-46","visual":"Highlight 'Count & Average' node: show code computing pi_est = 4*inside/N; print or return. Visual: final numeric display updates.","narration":"After looping N times compute π_est = 4*inside/N and return it.","on_screen_text":"pi_est = 4*inside/N"},
    {"time":"46-56","visual":"Show full code block on screen in readable font. Animate line-by-line as narrated. Under code add small tip icons (time complexity, randomness caveats).","narration":"This is the whole algorithm in a few lines. Each line corresponds to an action in the visualization.","on_screen_text":"Full function shown"},
    {"time":"56-60","visual":"Close with 'Part 2: speed & scaling — vectorization, parallelism' card.","narration":"Next we’ll speed it up with vectorization and parallel runs."}
  ]
}




{
  "video": "How Monte Carlo Works in Code",
  "part": "Part 2",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-4","visual":"Open on RNG visual: PRNG internal gears turning with sequences of numbers streaming.","narration":"Computers use pseudo-random number generators — fast algorithms that mimic true randomness.","on_screen_text":"PRNG: pseudo-random"},
    {"time":"4-12","visual":"Show function call random.uniform(-1,1) and a visual histogram of sampled values approaching uniformity as N increases.","narration":"Uniform RNG yields samples across the desired range — show distribution converging to flat.","on_screen_text":"random.uniform(-1,1)"},
    {"time":"12-22","visual":"Introduce vectorized approach: show numpy arrays of x and y sampled at once (N values), with code snippet: x = np.random.uniform(-1,1,N); y = np.random.uniform(-1,1,N); inside = np.sum(x*x + y*y <= 1).","narration":"Vectorization generates millions of samples at once using array operations — drastically faster than Python loops.","on_screen_text":"Vectorized: x = np.random.uniform(-1,1,N)"},
    {"time":"22-34","visual":"Animate speed comparison: left panel loop-based with a progress bar slow; right panel vectorized with near-instant result. Show time labels (e.g., loop: 12s; vectorized: 0.3s) — illustrative numbers only.","narration":"Vectorized code is orders of magnitude faster for large N — use efficient libraries like NumPy.","on_screen_text":"Loop vs Vectorized"},
    {"time":"34-46","visual":"Introduce parallelism/GPU: small graphic of GPU cores processing many samples in parallel. Short code mention: use numba/numba.cuda or cupy for GPU speedups.","narration":"GPUs and parallel processing multiply throughput further — millions of trials per second become feasible.","on_screen_text":"GPU / parallel acceleration"},
    {"time":"46-56","visual":"Show trade-off panel: speed vs reproducibility. Demonstrate seeding RNG for reproducible results: np.random.seed(42).","narration":"For reproducibility, seed the RNG. But for real randomness, avoid re-using seeds across runs.","on_screen_text":"np.random.seed(42)"},
    {"time":"56-60","visual":"Close with 'Part 3: accuracy, error, and advanced code' teaser.","narration":"Next we’ll tie code to accuracy and show advanced techniques to reduce error."}
  ]
}




{
  "video": "How Monte Carlo Works in Code",
  "part": "Part 3",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-4","visual":"Open with large N timeline: 1e3 → 1e4 → 1e6 samples. Numeric stats update.","narration":"We scale N to improve accuracy — but it comes at a computational cost.","on_screen_text":"Scaling N"},
    {"time":"4-14","visual":"Show error vs N again, but this time in code context: SE = sqrt(p(1-p)/N) for Bernoulli trials. Display code that computes SE and CI.","narration":"Estimate standard error in code: for Bernoulli variables SE = sqrt(p(1-p)/N). Use it to compute confidence intervals.","on_screen_text":"SE = sqrt(p(1-p)/N)"},
    {"time":"14-26","visual":"Show implementation of antithetic variates in code: u = np.random.rand(N); u_ant = 1-u; compute paired results and average. Visualize error band narrowing vs naive MC.","narration":"One trick: antithetic variates — pair samples with their complements to reduce variance.","on_screen_text":"antithetic = pair with 1-u"},
    {"time":"26-38","visual":"Show importance sampling pseudocode: sample from q(x), weight by w = p(x)/q(x). Visualize sampling concentrated on high-impact region and show efficiency improvement.","narration":"Importance sampling draws more from high-impact regions and weights results — often dramatically improving efficiency.","on_screen_text":"weight = p(x)/q(x)"},
    {"time":"38-48","visual":"Show control variates in code: compute correlated g(x) with known expectation and adjust estimator. Visualize variance drop.","narration":"Control variates use correlated known quantities to subtract noise and sharpen estimates.","on_screen_text":"adjusted_est = estimate - β(g- E[g])"},
    {"time":"48-56","visual":"Show final code block that ties it together: seed, vectorize, optionally antithetic, compute SE and CI, return estimate with CI. Show runtime metrics.","narration":"Combine these tools to get fast, reliable Monte Carlo: vectorize, seed appropriately, use variance reduction when needed.","on_screen_text":"return estimate, CI, runtime"},
    {"time":"56-60","visual":"Close with 'Monte Carlo in code: simple core, many optimizations'.","narration":"The core is simple — practical speed and accuracy come from smart implementation."}
  ]
}
