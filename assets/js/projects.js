// Project list
const aiSafetyProjects = [
    {
        title: 'Algorithmic Progress in Language Models',
        subtitle: 'How quickly have algorithms in language modelling been improving over time?',
        image: "/images/thumbnails/algo-progress.png",
        link: 'https://epochai.org/blog/algorithmic-progress-in-language-models',
    },
    {
        title: 'Limits to the Energy Efficiency of CMOS Microprocessors',
        subtitle: 'How far are we from reaching the "fundamental limits" of the current hardware paradigm?',
        image: "/images/thumbnails/energy-efficiency.png",
        link: 'https://epochai.org/blog/limits-to-the-energy-efficiency-of-cmos-microprocessors',
    },
    {
        title: 'Please Report Your Compute',
        subtitle: 'An opinion piece pushing for AI researchers to be more transparent in their compute usage.',
        image: "/images/thumbnails/please-report-your-compute.png",
        link: 'https://epochai.org/blog/please-report-your-compute',
    },
    {
        title: 'Key Trends and Figures in Machine Learning',
        subtitle: "A dashboard of key data from Epoch's research on ML",
        image: "/images/thumbnails/epoch-trends-dashboard.png",
        link: 'https://epochai.org/blog/announcing-trends-dashboard',
    },
    {
        title: 'Trends in Training Dataset Sizes',
        subtitle: 'How have dataset sizes in machine learning changed over time?',
        image: "/images/thumbnails/trends-in-training-dataset-sizes.png",
        link: 'https://epochai.org/blog/trends-in-training-dataset-sizes',
    },
    {
        title: 'Towards Transparent AI',
        subtitle: 'A Survey on Interpreting the Inner Structures of Deep Neural Networks',
        image: "/images/thumbnails/towards-transparent-AI.png",
        link: 'https://arxiv.org/abs/2207.13243',
    },
    {
        title: 'The longest training run',
        subtitle: "How long is the longest AI training run likely to be?",
        image: "/images/thumbnails/training-run.png",
        link: 'https://epochai.org/blog/the-longest-training-run',
    },
    {
        title: 'Machine Learning Model Sizes and the Parameter Gap',
        subtitle: 'Analysing trends in parameter counts of machine learning systems',
        image: "/images/thumbnails/machine-learning-model-sizes-and-the-parameter-gap.png",
        link: 'https://epochai.org/blog/machine-learning-model-sizes-and-the-parameter-gap',
    },
    {
        title: 'Grokking “Semi-informative priors over AI timelines”',
        subtitle: "Breaking down an outside view approach to forecasting AI developments",
        image: "/images/thumbnails/grokking-semi-informative-priors.png",
        link: 'https://epochai.org/blog/grokking-semi-informative-priors',
    },
    {
        title: 'Grokking “Forecasting TAI with biological anchors”',
        subtitle: "Can you forecast AI development by turning to biology?",
        image: "/images/thumbnails/grokking-bioanchors.png",
        link: 'https://epochai.org/blog/grokking-bioanchors',
    },
    {
        title: 'Compute Trends Across Three Eras of Machine Learning',
        subtitle: 'How has the training computation for machine learning systems changed over time?',
        image: "/images/thumbnails/PCD-trends.png",
        link: 'https://epochai.org/blog/compute-trends',
    },
    {
        title: 'Estimating Training Compute of Deep Learning Models',
        subtitle: 'Two approaches to estimating training compute, and a handy calculator for ML researchers',
        image: "/images/thumbnails/estimating-training-compute.png",
        link: 'https://epochai.org/blog/estimating-training-compute',
    },
    {
        title: 'What Is Physical Intuition?',
        subtitle: 'Exploring "physical understanding" in physics - how it helps, and how it could go wrong...',
        image: "/images/2022/phys_metal-rod.png",
        link: '/2022/01/30/what-is-physical-intuition.html',
    },
    {
        title: 'AI Takeoff Speeds and Evolution',
        subtitle: 'What role should evolutionary analogies play in understanding takeoff speeds?',
        image: "/images/thumbnails/ai-takeoffs-evolution.jpeg",
        link: 'https://www.alignmentforum.org/posts/teD4xjwoeWc4LyRAD/what-role-should-evolutionary-analogies-play-in',
    },
    {
        title: 'Dynamical Billiards',
        subtitle: 'What happens when you play billiards on an elliptical table?',
        image: "/images/thumbnails/dynamical-billiards.png",
        link: '/2021/03/22/dynamical-billiards.html',
    },
    {
        title: 'Deep Q-Networks',
        subtitle: 'Implementing DQNs for Spinning Up',
        image: "/images/thumbnails/DQN.png",
        link: 'https://github.com/ansonwhho/DQN',
    },
    {
        title: 'Conway\'s Game of Life',
        subtitle: 'A simulation of the Game of Life using Python',
        image: "/images/thumbnails/conway-game-of-life.png",
        link: '/2021/02/04/conways-game-of-life.html',
    },
    {
        title: 'The Physics of Rainbows',
        subtitle: 'A geometric optics simulation of rainbows',
        image: "/images/thumbnails/rainbows-and-rays.png",
        link: '/2021/01/23/the-physics-of-rainbows.html',
    },
];
    
// const eaProjects = [
//     {
//         title: 'Effective Altruism St Andrews',
//         subtitle: 'A website I helped design and set up for my university EA chapter',
//         image: "/images/thumbnails/EA-StA-website.png",
//         link: 'https://www.eastandrews.org',
//     },
//     {
//         title: 'Data and Information Policy',
//         subtitle: 'I co-authored a 2021 national policy document for Students for Global Health UK',
//         image: "/images/thumbnails/sfgh-uk.png",
//         link: 'https://studentsforglobalhealth.org/policy-statements/',
//     }
// ];

// const physicsProjects = [
//     {
//         title: 'What Is Physical Intuition?',
//         subtitle: 'Exploring "physical understanding" in physics - how it helps, and how it could go wrong...',
//         image: "/images/2022/phys_metal-rod.png",
//         link: '/2022/01/30/what-is-physical-intuition.html',
//     },
//     {
//         title: 'Orbital chaos',
//         subtitle: 'Some fooling around in the St Andrews Physics Thinkathon',
//         image: "/images/thumbnails/orbital-chaos.png",
//         link: 'https://github.com/ansonwhho/orbital-chaos',
//     },
//     {
//         title: 'The Physics of Rainbows',
//         subtitle: 'A geometric optics simulation of rainbows',
//         image: "/images/thumbnails/rainbows-and-rays.png",
//         link: '/2021/01/23/the-physics-of-rainbows.html',
//     },
//     {
//         title: 'PANDA Magazine',
//         subtitle: 'Website for the Physics and Astronomy Magazine at St Andrews',
//         image: "/images/thumbnails/panda-mag-website.png",
//         link: 'https://pandamagazine.wp.st-andrews.ac.uk/',
//     },
// ];

// const mathProjects = [
//     {
//         title: 'Dynamical Billiards',
//         subtitle: 'What happens when you play billiards on an elliptical table?',
//         image: "/images/thumbnails/dynamical-billiards.png",
//         link: '/2021/03/22/dynamical-billiards.html',
//     },
// ];

// const csProjects = [
//     {
//         title: 'Deep Q-Networks',
//         subtitle: 'Implementing DQNs for Spinning Up',
//         image: "/images/thumbnails/DQN.png",
//         link: 'https://github.com/ansonwhho/DQN',
//     },
//     {
//         title: 'Conway\'s Game of Life',
//         subtitle: 'A simulation of the Game of Life using Python',
//         image: "/images/thumbnails/conway-game-of-life.png",
//         link: '/2021/02/04/conways-game-of-life.html',
//     },
// ];

// Vue instances
new Vue({
    el: '#aiSafetyProjects',
    data: aiSafetyProjects
})

new Vue({
    el: '#eaProjects',
    data: eaProjects
})


new Vue({
    el: '#physicsProjects',
    data: {physicsProjects: physicsProjects}
})


new Vue({
    el: '#mathProjects',
    data: mathProjects
})

new Vue({
    el: '#csProjects',
    data: csProjects
})