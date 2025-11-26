{
  "video": "Limits and What’s Next for Monte Carlo",
  "part": "Part 1",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-3","visual":"Open with π estimation briefly for continuity, then zoom out to globe overlay.","narration":"Monte Carlo is a workhorse of simulation — but it has limits.","on_screen_text":"Limits & Evolution"},
    {"time":"3-12","visual":"Show error vs N graph and animate cost (time, CPU) rising as N grows.","narration":"To reduce error we need many samples — and that takes time and compute resources.","on_screen_text":"More samples = more compute"},
    {"time":"12-20","visual":"Display bullets: 'Needs many samples', 'Can be slow', 'Noise persists'. Each bullet accompanied by an icon of CPU, clock, static.","narration":"Monte Carlo’s cons: slow convergence, computational cost, and noisy outputs with small N.","on_screen_text":"Cons"},
    {"time":"20-30","visual":"Introduce new example: power grid reliability. Show stylized network nodes and edges across a region map. A title appears: 'Estimating grid collapse probability'.","narration":"We’ll use a new example so this one video stands alone: estimating the probability a power grid fails given random outages.","on_screen_text":"Example: Power grid reliability"},
    {"time":"30-40","visual":"Set up: each node has failure probability p; edges carry load; cascading failure rules appear visually (if node fails, load shifts; overloaded nodes fail).","narration":"Each simulation toggles random failures at nodes and then applies cascading rules to see if system collapse occurs.","on_screen_text":"Random failures → cascade rules"},
    {"time":"40-52","visual":"Show single trial animation: a few nodes fail → cascade → either contained or large blackout. Visual label: trial_result = collapse? True/False.","narration":"One trial either produces a contained outage or a cascade causing collapse. But one trial is not informative by itself.","on_screen_text":"Trial result: collapse?"},
    {"time":"52-60","visual":"Close by stating Part 2 will show how thousands of such trials estimate collapse probability and the heavy compute needed.","narration":"Next we run this thousands of times to estimate probability — and examine the limits and workarounds for the heavy compute.","on_screen_text":"Next: simulate thousands → estimate P(collapse)"}
  ]
}



{
  "video": "Limits and What’s Next for Monte Carlo",
  "part": "Part 2",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-4","visual":"Open with code header: def simulate_grid(N, p):","narration":"To estimate collapse probability we run many Monte Carlo trials and tally collapses.","on_screen_text":"def simulate_grid(N,p):"},
    {"time":"4-12","visual":"Show pseudocode block: for i in range(N): failures = sample_bernoulli(p) ; apply cascade_rule(failures) ; if collapse: count+=1. Lines highlight as narration describes each step.","narration":"For each trial: sample node failures (Bernoulli draws), run cascade logic, and record whether the grid collapsed.","on_screen_text":"for i in range(N): ..."},
    {"time":"12-20","visual":"Show Bernoulli sampling animation: each node flips a biased coin with probability p; red nodes indicate failed servers.","narration":"Each node fails with probability p — the randomness models uncertain conditions like overloads or storms.","on_screen_text":"node fails with prob p"},
    {"time":"20-30","visual":"Show cascade logic visual: failed nodes shift load; highlight overloaded neighbor nodes turning red sequentially; show time-step animation.","narration":"When a node fails, its load redistributes; if neighbors are overloaded they can fail too — causing cascades.","on_screen_text":"Cascading failure rules"},
    {"time":"30-40","visual":"Run multiple trials rapidly: show grid of small maps each representing a trial; some maps black out, some remain green. Count box updates: collapse_count / N.","narration":"Repeat many trials; count the fraction that collapse. The estimated probability is collapse_count/N.","on_screen_text":"P_collapse ≈ collapse_count / N"},
    {"time":"40-50","visual":"Display confidence interval calculation: p_hat ± z * sqrt(p_hat(1-p_hat)/N). Animate CI bar narrowing with larger N.","narration":"We also compute confidence intervals: p̂ ± z·√(p̂(1−p̂)/N) to quantify uncertainty in our estimate.","on_screen_text":"CI = p̂ ± z·SE"},
    {"time":"50-60","visual":"Summarize compute cost: show time vs accuracy graph; highlight need for many trials and heavy compute (GPU rack imagery). Tease Part 3: improvements, variance reduction, surrogate models.","narration":"This approach works but can be costly. Next we’ll explore methods to reduce computational cost and improve efficiency.","on_screen_text":"Next: speedups & alternatives"}
  ]
}




{
  "video": "Limits and What’s Next for Monte Carlo",
  "part": "Part 3",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-6","visual":"Open with GPU rack rendering many trials, then zoom to cloud icons representing distributed computing.","narration":"To overcome Monte Carlo’s cost, practitioners use parallel computing, GPUs, and cloud farms to run trials faster.","on_screen_text":"Parallel • GPU • Cloud"},
    {"time":"6-14","visual":"Show variance reduction methods applied to grid example: importance sampling (bias more trials toward severe initial failures) and control variates (use approximate model to correct Monte Carlo). Visual: fewer trials achieve same CI.","narration":"Use methods like importance sampling and control variates to focus compute where it matters and reduce required samples.","on_screen_text":"Variance reduction → more efficient"},
    {"time":"14-26","visual":"Highlight surrogate models: build a fast ML model that emulates expensive simulation; show training on Monte Carlo outputs and inference much faster. Visual: small neural net icon mapping inputs→approx output.","narration":"Surrogate models (trained ML emulators) can approximate expensive simulations and produce near-instant estimates once trained.","on_screen_text":"Surrogates • ML emulators"},
    {"time":"26-36","visual":"Show modern use-cases montage: AI with Monte Carlo Dropout indicating uncertainty; climate ensembles using randomized perturbations; particle physics relying on MC sampling. Each with a short label and visualization.","narration":"Monte Carlo ideas power modern AI uncertainty estimation, climate ensembles, particle physics, and more.","on_screen_text":"AI • Climate • Physics"},
    {"time":"36-48","visual":"Return to the power grid: show a final dashboard combining Monte Carlo results, CI bands, and recommended mitigations derived from simulations (reinforce, reroute load).","narration":"In practice, Monte Carlo results feed dashboards that guide mitigation — from hardening infrastructure to rerouting power.","on_screen_text":"From simulation → decisions"},
    {"time":"48-56","visual":"Summarize pros/cons side-by-side: Pros (simple, flexible, general) vs Cons (slow, costly, noisy). Visual table with icons.","narration":"Monte Carlo is simple, flexible, and universal — but it needs compute and clever tricks to be efficient.","on_screen_text":"Pros vs Cons"},
    {"time":"56-60","visual":"Final closing: particles converge into a bright dot; overlay text 'Monte Carlo: Randomness → Insight'. Soft music swell.","narration":"Monte Carlo turns random trials into real understanding. Its future is faster and smarter, but the basic idea remains the same.","on_screen_text":"Monte Carlo: Randomness → Insight"}
}
