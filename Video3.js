{
  "video": "The Simple Math Behind Monte Carlo",
  "part": "Part 1",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-3","visual":"Open on a single glowing dot dropping into dark-blue grid.","narration":"Every random test gives a little bit of information.","on_screen_text":"One sample = tiny info"},
    {"time":"3-10","visual":"Coin flip animation: show 1 flip result, then animate 10 flips stacked. Bars show frequency swing.","narration":"With few trials, averages vary wildly.","on_screen_text":"Few trials → high variance"},
    {"time":"10-18","visual":"Expand to 10,000 coin flips: show bar stabilize near 50/50. Transition to pi point-dropping showing sparse vs dense.","narration":"With many trials, the sample average approaches the true probability — that’s the key premise of Monte Carlo.","on_screen_text":"Many trials → stability"},
    {"time":"18-26","visual":"Display simple formula: sample_mean = (1/N) Σ X_i. Underneath: 'Each X_i is one trial result.'","narration":"Mathematically: the sample mean approximates the expected value.","on_screen_text":"sample_mean = (1/N) Σ X_i"},
    {"time":"26-36","visual":"Return to π-estimate square; show dots colored based on in/out and the running mean calculation displayed numerically.","narration":"For π, each point contributes 1 if inside, 0 if outside. Their average approximates π/4.","on_screen_text":"π/4 ≈ average(in_circle)"},
    {"time":"36-48","visual":"Show animated 'convergence vs noise' comparison: fast-sampled low-N vs slow, high-quality high-N.","narration":"Noise decays as more samples accumulate; the rate of decay is the mathematical cost of Monte Carlo.","on_screen_text":"Noise → decays with N"},
    {"time":"48-60","visual":"Finish with a plain-English statement of the idea: 'the more samples, the closer we get to the truth.' Fade to title teasing Part 2: 'Error & Convergence'.","narration":"In short: many random tests + averaging → meaningful estimates. Next we’ll quantify how error shrinks.","on_screen_text":"More samples → closer to truth"}
  ]
}



{
  "video": "The Simple Math Behind Monte Carlo",
  "part": "Part 2",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-3","visual":"Open with a graph grid: x-axis samples N, y-axis error.","narration":"Let’s quantify convergence and error.","on_screen_text":"Error vs N"},
    {"time":"3-12","visual":"Plot animated curve showing error decreasing as N increases; mark points at N=100,1k,10k,100k.","narration":"Empirically, Monte Carlo error scales roughly as constant divided by square root of N.","on_screen_text":"Error ≈ C / √N"},
    {"time":"12-20","visual":"Display derivation-like intuition visually: variance of mean = Var(X)/N; standard error = sqrt(Var(X)/N). Use plain labels, not heavy math.","narration":"Because variance of the sample mean shrinks by factor 1/N, standard error shrinks like 1/√N.","on_screen_text":"StdError = sqrt(Var)/√N","extra":"show Var(X) box"},
    {"time":"20-30","visual":"Apply to π example: show how error halves (visual overlay) when sample count quadruples — animate sample slider to 10k→40k and show error drop.","narration":"To halve the error you must quadruple samples — a practical limitation of Monte Carlo.","on_screen_text":"Halve error → 4× samples"},
    {"time":"30-38","visual":"Introduce Confidence Interval: show estimate ± z * StdError, visualize by shading around estimate as N increases (shading narrows).","narration":"We can also quantify uncertainty with confidence intervals: estimate ± z * standard error.","on_screen_text":"CI = estimate ± z·SE"},
    {"time":"38-50","visual":"Show a comparative animation: Monte Carlo vs deterministic numerical integration methods (brief): MC slow to converge but easy in high dim; deterministic faster in low dims.","narration":"Monte Carlo is slow in convergence compared to some methods but scales well to high-dimensional problems where deterministic integration fails.","on_screen_text":"MC: slow but scales to high-dim"},
    {"time":"50-60","visual":"Close with tip: 'Use variance reduction (importance sampling, antithetic variates) to speed convergence' and tease next part about practical math tricks.","narration":"There are tricks to improve efficiency—importance sampling, control variates, antithetic sampling—and we’ll show these ideas next.","on_screen_text":"Variance reduction → next"}
  ]
}



{
  "video": "The Simple Math Behind Monte Carlo",
  "part": "Part 3",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-4","visual":"Open with title: 'Variance Reduction Tricks' and subtle particle burst.","narration":"To speed up Monte Carlo we can reduce variance — get better estimates with fewer samples.","on_screen_text":"Variance reduction"},
    {"time":"4-14","visual":"Technique 1: Antithetic variates. Show pair of points mirrored across origin; their results averaged produce lower variance. Visual overlay: two mirrored dots, arrow to average.","narration":"Antithetic variates use pairs of opposite random draws so errors cancel.","on_screen_text":"Antithetic variates"},
    {"time":"14-26","visual":"Technique 2: Importance sampling. Show target function with areas of high weight. Sample more often where function contributes most (visual: denser dots where curve is tall).","narration":"Importance sampling focuses samples on high-impact regions, improving efficiency.","on_screen_text":"Importance sampling"},
    {"time":"26-36","visual":"Technique 3: Control variates. Show simple known function correlated with unknown one; subtract difference to reduce variance. Visual analogy: measuring height by correcting with a ruler reference.","narration":"Control variates subtract a known correlated quantity to lower variance.","on_screen_text":"Control variates"},
    {"time":"36-46","visual":"Show code-like pseudo for importance sampling and antithetic pairing (short snippets). Animate sampling and show fewer samples achieving same error band as naive MC.","narration":"In code these ideas are simple to implement — sample smarter, pair draws, and average results to cut error.","on_screen_text":"Code: sample smarter"},
    {"time":"46-56","visual":"Return to π example with importance sampling overlay (biased sampling near circle boundary) and show dramatic reduction in error vs same N naive MC.","narration":"With a variance reduction strategy, the same number of samples yields a much better estimate.","on_screen_text":"Better estimates with fewer samples"},
    {"time":"56-60","visual":"Closing text: 'Monte Carlo = simple math + practical tricks'. Fade out.","narration":"Monte Carlo’s math is simple — but practical tricks make it much more powerful in practice.","on_screen_text":"Simple math + practical tricks"}
  ]
}
