{
  "video": "How Monte Carlo Solves Problems",
  "part": "Part 1",
  "duration": "60s",
  "format": "landscape",
  "style": "same visual identity",
  "timeline": [
    {"time":"0-3","visual":"Open with rapid montage: stock chart jitter, cars on freeway, animated storm radar, dice rolling.","narration":"Monte Carlo is used to estimate the unknown and model uncertainty in many fields.","on_screen_text":"Used in Finance • Weather • Traffic • Games"},
    {"time":"3-9","visual":"Split-screen icons labeled 'Estimate things we can’t measure' and 'Model uncertainty'. Each icon pulses as narration mentions it.","narration":"It helps estimate what we can’t measure directly and models real-world randomness.","on_screen_text":"Estimate • Model uncertainty"},
    {"time":"9-16","visual":"Transition into finance example: full-screen 3D stock chart. Many faint simulated paths animate in the background.","narration":"In finance, Monte Carlo predicts possible stock futures by simulating many random price paths.","on_screen_text":"Finance example: stock paths"},
    {"time":"16-22","visual":"Show core SDE equation in readable form: dS = μS dt + σS dW. Beneath, show intuitive labels: drift μ, volatility σ, noise dW.","narration":"A common model: dS = μS dt + σS dW — drift plus random shocks.","on_screen_text":"dS = μS dt + σS dW"},
    {"time":"22-30","visual":"Animate one path building step-by-step using discrete step formula: S_{t+Δt} = S_t * exp((μ - σ²/2)Δt + σ√Δt·Z). Z appears as a sampled normal deviate.","narration":"Discretely we simulate: S_{t+Δt} = S_t × exp((μ−σ²/2)Δt + σ√Δt·Z) where Z ~ Normal(0,1).","on_screen_text":"S_{t+Δt} = S_t × exp(...)","extra":"anim: show Z sampled and inserted"},
    {"time":"30-40","visual":"Fade to a grid of 100 simulated trajectories, histogram forming to the right of final prices.","narration":"Hundreds of trials provide a distribution of possible futures — a more useful picture than a single forecast.","on_screen_text":"Distribution → Risk & Expectation"},
    {"time":"40-52","visual":"Show short bullet list: 'Easy to run many scenarios', 'Gives average/percentile predictions', 'Captures uncertainty'. Each item illustrated by a small animation.","narration":"Monte Carlo is used because it's easy to test many scenarios and aggregate them into averages or percentiles.","on_screen_text":"Why use Monte Carlo?"},
    {"time":"52-60","visual":"Tease next part: zoom into code-like pseudo-visual: 'We’ll show the math + code next.'","narration":"Next: we’ll show the math behind these simulations and the code that runs them.","on_screen_text":"Next: Math + Code"}
  ]
}


{
  "video": "How Monte Carlo Solves Problems",
  "part": "Part 2",
  "duration": "60s",
  "format": "landscape",
  "style": "consistent",
  "timeline": [
    {"time":"0-3","visual":"Open on the SDE formula from Part 1 floating over the stock path grid.","narration":"Now let’s dig into the math and code that simulate stock paths.","on_screen_text":"Math → Code"},
    {"time":"3-12","visual":"Break SDE into discrete step. Show formula: S_{t+Δt} = S_t exp((μ−σ²/2)Δt + σ√Δt·Z). Animate labeling: μ=drift, σ=volatility, Z=random normal.","narration":"At each time step we add a deterministic drift and a random shock scaled by volatility.","on_screen_text":"Discrete update"},
    {"time":"12-20","visual":"Show code panel (Python-like) on left and visual stock path being updated on right. Code lines highlight as narrated.","narration":"Here’s the core loop: for each trial, for each time step, sample Z ~ N(0,1); update price using the formula.","on_screen_text":"for t in range(steps): Z = randn(); S *= exp((mu - sigma**2/2)*dt + sigma*sqrt(dt)*Z)","extra":"code block must be readable, line-by-line highlighting synced to animation"},
    {"time":"20-30","visual":"Zoom into randn() generator: show normal distribution curve and a dot sampled each iteration. Display pseudo-code explanation for sampling Z.","narration":"randn() draws from a normal distribution. Each draw is an independent 'shock' that makes the path random.","on_screen_text":"Z ~ Normal(0,1)","extra":"animate sampling on the normal pdf"},
    {"time":"30-40","visual":"Aggregate results: show histogram of final prices, compute mean and percentiles visually. Code snippet computes results.append(S) and then np.mean(results), np.percentile(results,[5,95]).","narration":"After many trials we compute statistics — mean, percentiles, probabilities — to inform decisions.","on_screen_text":"mean, percentiles, probability"},
    {"time":"40-50","visual":"Show example decision: option pricing or risk metric. Highlight how Monte Carlo output feeds into that decision (e.g. Value at Risk).","narration":"These outputs power real decisions like option pricing or estimating Value at Risk (VaR).","on_screen_text":"Example: VaR"},
    {"time":"50-60","visual":"Close with reminder: math and code scale to other sectors. Tease Part 3: other domains (traffic, games) + deep dive into one more domain.","narration":"This same math-and-code pattern can be applied to many domains — next, we’ll survey other use-cases and focus deeply on one.","on_screen_text":"Next: Other use-cases + Deep dive"}
  ]
}



{
  "video": "How Monte Carlo Solves Problems",
  "part": "Part 3",
  "duration": "60s",
  "format": "landscape",
  "style": "same",
  "timeline": [
    {"time":"0-4","visual":"Open with icons: traffic, weather, games, science to illustrate breadth.","narration":"Monte Carlo is not just for finance — it’s used wherever uncertainty matters.","on_screen_text":"Traffic • Weather • Games • Science"},
    {"time":"4-12","visual":"Transition to traffic: stylized highway map with cars represented as dots. Each car gets an assigned speed drawn randomly from a distribution.","narration":"For traffic modeling, we simulate many drivers with randomized speeds, reaction times, and behaviors.","on_screen_text":"Traffic example: random drivers"},
    {"time":"12-20","visual":"Show simple micro-model: each car's position updates according to v = v + random_accel; spacing rules enforce no-collision. Provide formula for position update x_{t+1} = x_t + v_t*dt.","narration":"At each time step, we update position: x_{t+1}=x_t + v_t·dt, where v_t includes small random accelerations to model driver variability.","on_screen_text":"x_{t+1} = x_t + v_t·dt"},
    {"time":"20-30","visual":"Show code snippet pseudo-Python: for trial in range(N): initialize cars; for t in steps: v += random.normal(0,σ); x += v*dt; collect metrics.","narration":"In code we run many trials with randomized initial conditions, then collect metrics like average speed or congestion probability.","on_screen_text":"for trial in range(N): ...","extra":"highlight each line as animated cars behave accordingly"},
    {"time":"30-40","visual":"Visualize many trials layered: some trials produce smooth flow, some a traffic jam shockwave. Show percentage of trials exhibiting jam.","narration":"Running thousands of simulations reveals how likely congestion is under certain conditions — critical for traffic planning.","on_screen_text":"% of trials → congestion probability"},
    {"time":"40-52","visual":"Show practical use-case: city planner slider adjusts traffic density and sees predicted congestion probability update live (real-time Monte Carlo).","narration":"Planners can tweak parameters and immediately see how the risk profile changes — which lanes to add, when to alter signals.","on_screen_text":"Interactive planning"},
    {"time":"52-60","visual":"Close with summary: Monte Carlo transforms uncertain micro-behaviors into macroscopic probabilities. End with call-to-action: 'Monte Carlo: simulate many, learn much.'","narration":"Monte Carlo turns many small random behaviors into a clear picture of system-level risk and performance.","on_screen_text":"Simulate many → learn much"}
  ]
}
