var words = [
    {
        id: 1,
        word: 'Six Sigma',
        definition: 'A methodology that is used to help streamline the processes of business by decreasing process variation which leads to better output and fewer defects. (https://asq.org/quality-resources/six-sigma (Links to an external site.)'
    },
    {
        id: 2,
        word: 'Lean Management',
        definition: 'A Japanese method of production which involves cutting and reducing waste in systems without sacrificing productivity.  (https://kanbanize.com/lean-management/what-is-lean-management/ (Links to an external site.)'
    },
    {
        id: 3,
        word: 'Service Blueprinting',
        definition: 'A diagram that visually represents all of the steps in a provided service. Includes everything from the customer to last-tier suppliers. Using a service blueprint makes it easier to identify strengths and weaknesses of the process.'
    },
    {
        id: 4,
        word: 'Theory of Constrains',
        definition: 'Generally, the theory of constraints is the process of improving limiting factors that stand in the way of a goal. In manufacturing, the theory states that the best way to improve efficiency is to identify the greatest bottleneck in a process and improve it until it is no longer a bottleneck. (https://www.leanproduction.com/theory-of-constraints.html (Links to an external site.)'
    },
    {
        id: 5,
        word: 'Five Whys',
        definition: 'A quick problem-solving technique method that looks for a deeper cause by just asking "why" to the first problem and repeat the question to every argument until you find the underlying cause. (https://www.mindtools.com/pages/article/newTMC_5W.htm (Links to an external site.)'
    },
    {
        id: 6,
        word: 'Kanban system',
        definition: 'created as a simple planning system in order to control and manage work inventory at every stage of production optimally, allows work to be more cost-effective. (https://www.digite.com/kanban/what-is-kanban/ (Links to an external site.)'
    },
    {
        id: 7,
        word: 'Heijunka',
        definition: 'a Japanese word that means "leveling" which helps organizations meet demand while reducing wastes in production and interpersonal processes. (https://www.isixsigma.com/methodology/lean-methodology/heijunka-the-art-of-leveling-production/ (Links to an external site.)'
    },
    {
        id: 8,
        word: 'Jidoka',
        definition: 'automation with human intelligence." If a machine senses an abnormality, it will immediately stop its production until it is fixed. (Lean Enterprise Institute. Jidoka. Retrieved from https://www.lean.org/lexicon/jidoka (Links to an external site.)'
    },
    {
        id: 9,
        word: 'Just-in-time (JIT) philosophy',
        definition: 'A system of production that focuses on delivering a desired product at a desired time in the desire quantity. Its goal is to eliminate waste. (Lean Enterprose Institute. Just-In-Time Production. Retrieved from https://www.lean.org/lexicon/just-in-time-production.)'
    },
    {
        id: 10,
        word: 'Toyota Production System',
        definition: 'a system based on the basic philosophies of Jidoka and Just-in-time that can efficiently and quickly produce vehicles of sound quality, one at a time, that fully satisfy customer requirements.  (https://global.toyota/en/company/vision-and-philosophy/production-system/ (Links to an external site.)'
    },
    {
        id: 11,
        word: 'Operating Cost',
        definition: 'are expenses associated with the maintenance and administration of a business on a day-to-day basis. (https://www.investopedia.com/terms/o/operating-cost.asp (Links to an external site.)'
    },
    {
        id: 12,
        word: 'Efficiency',
        definition: 'The comparison of what is actually produced or performed with what can be achieved with the same consumption of resources (money, time, labor, etc.). It is an important factor in determination of productivity. (http://www.businessdictionary.com/definition/efficiency.html)'
    },
    {
        id: 13,
        word: 'Reverse Logistics',
        definition: 'The process of moving goods from their typical final destination for the purpose of capturing value, or proper disposal. Remanufacturing and refurbishing activities also may be included in the definition of reverse logistics. https://en.wikipedia.org/wiki/Reverse_logistics'
    },
    {
        id: 14,
        word: 'Logistics',
        definition: 'Planning, execution, and control of the procurement, movement, and stationing of personnel, material, and other resources to achieve the objectives of a campaign, plan, project, or strategy. It may be defined as the management of inventory in motion and at rest.'
    },
    {
        id: 15,
        word: 'Outsourcing',
        definition: 'Involves hiring outside parties to perform tasks that had once been performed inside the company by its employees, with the general intention of cutting costs for the company. (https://www.investopedia.com/terms/o/outsourcing.asp (Links to an external site.)'
    },
    {
        id: 16,
        word: 'Vertical integration',
        definition: 'A strategy where a company will own more than one part or all of its supply chain to help reduce costs and increase efficiencies. (https://www.investopedia.com/terms/v/verticalintegration.asp (Links to an external site.)'
    },
    {
        id: 17,
        word: 'Cross-docking',
        definition: 'also known as flow-through operations is the process of receiving a product at your dock (or warehouse) and shipping it out shortly there after. This means you won\'t need to store the product in your warehouse saving you time and space. Cross-docking can be a difficult feat, but if pulled off correctly has serious benefits. https://www.supplychainmusings.com/2008/04/understanding-cross-docking.html'
    },
    {
        id: 18,
        word: 'Enterprise Resource Planning',
        definition: 'Enterprise Resource Planning (ERP) involves bringing large divisions of the company (such as accounting, finance and logistics) into one main system or database to create more efficient inter-divisional processes and sharing of information. (https://searcherp.techtarget.com/definition/ERP-enterprise-resource-planning (Links to an external site.)'
    },
    {
        id: 19,
        word: 'Supply chain management',
        definition: 'Managing and streamlining any tasks or costs involved in the supply chain process, which involves the flow of goods and services from raw materials to final products, which will reduce costs and allow companies to make and deliver goods and services as efficiently and effectively as possible. (https://www.investopedia.com/terms/s/scm.asp (Links to an external site.)'
    },
    {
        id: 20,
        word: 'Traveling salesman problem',
        definition: 'a system based on the basic philosophies of Jidoka and Just-in-time that can efficiently and quickly produce vehicles of sound quality, one at a time, that fully satisfy customer requirements.  (https://global.toyota/en/company/vision-and-philosophy/production-system/ (Links to an external site.) a popular mathematics problem that asks for the most efficient trajectory possible given a set of points and distances that must all be visited. (https://www.techopedia.com/definition/22635/traveling-salesman-problem-tsp (Links to an external site.)'
    }
]


function random() {
    var index = Math.floor(Math.random()* words.length);
    document.getElementById('random-term').innerHTML = words[index].word;
    document.getElementById('random-term-definition').innerHTML = words[index].definition;
    }

module.exports = words;