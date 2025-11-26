{
  "video": "What Is Monte Carlo?",
  "part": "Part 1",
  "duration": "60s",
  "format": "landscape",
  "style": "dark-blue analytic background, neon-white/yellow highlights, subtle grid, soft cinematic music",
  "timeline": [
    {"time":"0-2","visual":"Black screen fades to deep-blue analytic grid. Tiny glowing particles drift.","narration":"Monte Carlo simulation — a method that uses randomness to find answers.","on_screen_text":"Monte Carlo = Randomness → Answers"},
    {"time":"2-6","visual":"Closeup: classic roulette wheel spins in slow motion, numbers and chips reflect neon light.","narration":"The name comes from the Monte Carlo casino — a nod to chance and randomness.","on_screen_text":"Named after Monte Carlo (Casino)","extra":"camera: slow dolly back"},
    {"time":"6-12","visual":"Roulette wheel melts into numerical digits (0–1) that float and form a 2D square with an inscribed circle. Square and circle have thin neon outlines.","narration":"At heart, Monte Carlo uses random numbers to approximate answers to tough problems.","on_screen_text":"Random numbers → approximate answers"},
    {"time":"12-18","visual":"Unit square (−1..1 both axes) appears; small coordinate axes (x,y). One dot drops into square (white), then another. Dots pause one-by-one.","narration":"Here’s a simple example: estimate π by dropping random points into a square and checking if they land inside a circle.","on_screen_text":"Simple example: estimate π"},
    {"time":"18-26","visual":"Circle labeled r=1. A point spawns at (x,y). Show calculation overlay: x² + y² ≤ 1 next to point. If true, point lights blue.","narration":"If a point satisfies x² + y² ≤ 1, it’s inside the circle. Counting those points gives an estimate of π.","on_screen_text":"Inside condition: x² + y² ≤ 1","extra":"brief highlight on algebraic check"},
    {"time":"26-36","visual":"Slowly drop a stream of 50 points. Blue = inside, gray = outside. A counter displays inside: 12 / total: 50. Numeric pi_est = 4 * (12/50) updates on screen.","narration":"The fraction of points inside the circle times four approximates π. Initially the value bounces around.","on_screen_text":"π ≈ 4 × (inside / total)","extra":"animate ratio and pi_est updating"},
    {"time":"36-48","visual":"Split-screen: left shows dots early (sparse) with poor pi estimate; right shows future dense dots with better estimate. Smooth transition from left to right in time-lapse.","narration":"One trial gives noisy results, but more trials reveal a pattern. That pattern is the estimate converging.","on_screen_text":"More trials → better estimate"},
    {"time":"48-56","visual":"Full-screen: neon dots continue to fall, filling the square. The estimate number stabilizes toward 3.141... Add subtle glow to converging digits.","narration":"This is the essence of Monte Carlo — randomness produces information when repeated enough times.","on_screen_text":"From randomness → pattern"},
    {"time":"56-60","visual":"Fade to a minimal title card for Part 2: 'Estimating π — more samples, more clarity'.","narration":"In part two we accelerate the process and watch the estimate converge faster.","on_screen_text":"Next: Convergence in Action"}
  ]
}



{
  "video": "What Is Monte Carlo?",
  "part": "Part 2",
  "duration": "60s",
  "format": "landscape",
  "style": "same as Part 1 for continuity",
  "timeline": [
    {"time":"0-2","visual":"Continue from Part1 'filled square' state — camera zooms slightly in.","narration":"Part two: watch how random samples turn into a precise number.","on_screen_text":"Convergence demo"},
    {"time":"2-8","visual":"Point drop rate increases. Points spawn 200 at a time in frames — multiplication effect. Counter rapidly increments.","narration":"We’ll ramp sample counts: 100, 1,000, 10,000 — and watch the estimate stabilize.","on_screen_text":"Samples: 100 → 1,000 → 10,000"},
    {"time":"8-14","visual":"Show pi_est progression in large numeric font: 2.78 → 3.02 → 3.12 → 3.139. Each change animates with easing.","narration":"The estimate jumps at first, then settles closer to the true value: 3.14159…","on_screen_text":"π estimate updates"},
    {"time":"14-22","visual":"Display mathematical context: left panel shows Area_circle = πr²; right panel shows ratio derivation: π/4 = Area_circle / Area_square. Arrows show substitution into sample ratio.","narration":"Why? Because Area_circle/Area_square = π/4. The fraction hits_in/total approximates that ratio.","on_screen_text":"π/4 = Area_circle / Area_square","extra":"fade-in equation formatting"},
    {"time":"22-30","visual":"Overlay a convergence graph: x-axis = number of samples, y-axis = π_est error (abs(pi_est - π)). The curve decreases; show markers at 100,1k,10k,100k.","narration":"Error shrinks with more samples. Notice the curve declines but flattens — diminishing returns appear.","on_screen_text":"Error vs. samples","extra":"animate marker pulses"},
    {"time":"30-38","visual":"In-screen callout box: 'Error ≈ C / √N' appears with a plain-English caption beneath: 'To reduce error by 2×, need 4× samples.'","narration":"Roughly, error drops like one over the square root of N — so improvements slow down as you add more samples.","on_screen_text":"Error ∝ 1/√N","extra":"highlight '√'"},
    {"time":"38-46","visual":"Return to point visualization: show two runs side-by-side with different RNG seeds — both converge to π but traces differ.","narration":"Different random seeds give different trial histories, but the averages converge to the same result.","on_screen_text":"Different seeds → same limit"},
    {"time":"46-54","visual":"Show real-world overlay: a dimmed backdrop of finance, weather, and traffic icons fade in to imply applicability.","narration":"This same idea — samples, averages, and convergence — is used across many fields.","on_screen_text":"Same method, many fields"},
    {"time":"54-60","visual":"Close with a crisp title 'Part 3: Why randomness works (Law of Large Numbers)'.","narration":"In part three we’ll explain the simple math principle that makes this all possible.","on_screen_text":"Next: Law of Large Numbers"}
  ]
}




{
  "video": "What Is Monte Carlo?",
  "part": "Part 3",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent theme",
  "timeline": [
    {"time":"0-4","visual":"Start with coin flip animation: coin flips appear left of frame, tally marks appear.","narration":"A single trial is noisy. Ten trials vary a lot. Ten thousand trials cluster tightly.","on_screen_text":"Trial counts: 10 vs 10,000"},
    {"time":"4-12","visual":"Show 3-row visualization: top row 10 flips, middle 100 flips, bottom 10,000 flips. Bars show frequency of heads vs tails — more samples converge to 50/50.","narration":"This is the Law of Large Numbers: as the number of independent trials grows, sample averages approach true probabilities.","on_screen_text":"Law of Large Numbers"},
    {"time":"12-18","visual":"Bring back the π estimation square next to coin example. Show how both examples are the same math idea — averages over random trials.","narration":"Whether coins or points in a circle, the math is the same: averages of random samples reveal the true quantities.","on_screen_text":"Same math: averages → truth"},
    {"time":"18-26","visual":"Show formula nicely typeset: E[X] ≈ (1/N) Σ X_i. Below in plain text: 'The average of many samples approximates the expected value.'","narration":"Mathematically: the expectation E[X] is approximated by the sample mean (1/N)Σ X_i.","on_screen_text":"E[X] ≈ (1/N) Σ X_i","extra":"brief highlight block"},
    {"time":"26-36","visual":"Animated proof intuition: show many independent sample clouds; arrows push their mean to the expected value. Use simple visuals — no dense proof.","narration":"Intuitively: with many independent random pulls, random errors cancel out and the mean homes in on the true value.","on_screen_text":"Errors cancel → mean stabilizes"},
    {"time":"36-44","visual":"Display practical note: 'Error ~ 1/√N' with an animated slider that increases N and shows error shrinking slowly.", "narration":"Important: error decreases slowly — like 1 over the square root of N — so accuracy requires lots of samples.","on_screen_text":"Error ≈ 1/√N"},
    {"time":"44-52","visual":"Return to montage of use-cases (finance, weather, traffic) with a small caption under each saying 'samples → averages → predictions'.","narration":"That’s why Monte Carlo is so useful across domains: it turns complicated, uncertain systems into estimable averages.","on_screen_text":"Many fields • Same idea"},
    {"time":"52-60","visual":"Final summary card: neon text 'Monte Carlo = Randomness + Averages + Lots of Trials' with a soft particle bloom.","narration":"Monte Carlo: randomness plus lots of trials equals insight. End of video 1 series.","on_screen_text":"Monte Carlo = Randomness + Averages + Lots of Trials"}
  ]
}
