// ===== Food Toxin Database =====
const foodDatabase = [
    {
        name: "Apples",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (Diphenylamine, Thiabendazole)", level: "high", description: "Consistently ranks high for pesticide residues. Over 90% of conventional apples test positive for multiple pesticide residues." }
        ],
        tips: ["Buy organic when possible", "Wash thoroughly under running water", "Peel to remove surface residues", "Use a baking soda water soak (1 tsp per 2 cups water) for 12-15 minutes"],
        alternatives: ["Organic apples", "Pears (lower residue)"]
    },
    {
        name: "Strawberries",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "Top of the Dirty Dozen list. Can contain residues from 20+ different pesticides. Difficult to wash due to porous surface." }
        ],
        tips: ["Buy organic", "Soak in vinegar-water solution (1:4) for 5 minutes", "Buy in season from local farms", "Frozen organic berries are a good alternative"],
        alternatives: ["Organic strawberries", "Blueberries (less residue)", "Kiwi"]
    },
    {
        name: "Spinach",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (Permethrin, DDT)", level: "high", description: "High concentration of pesticide residues. Leafy texture traps chemicals." },
            { name: "Heavy metals (Cadmium)", level: "medium", description: "Can accumulate cadmium from soil. Levels vary by growing region." },
            { name: "Oxalates (natural)", level: "low", description: "Contains naturally occurring oxalic acid which can interfere with calcium absorption and contribute to kidney stones in susceptible individuals." }
        ],
        tips: ["Buy organic", "Wash each leaf individually", "Blanching reduces some residues", "Rotate with other greens"],
        alternatives: ["Organic spinach", "Broccoli", "Arugula"]
    },
    {
        name: "Kale",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (DCPA/Dacthal)", level: "high", description: "Recently moved higher on Dirty Dozen list. DCPA classified as a possible carcinogen." },
            { name: "Heavy metals (Thallium)", level: "low", description: "Some studies found kale can absorb thallium from soil, though levels are generally low." }
        ],
        tips: ["Buy organic", "Wash thoroughly in cold water", "Massage leaves to help release residues", "Cook to reduce some contaminants"],
        alternatives: ["Organic kale", "Cabbage (cleaner)", "Swiss chard"]
    },
    {
        name: "Rice",
        category: "grains",
        riskLevel: "high",
        toxins: [
            { name: "Arsenic (inorganic)", level: "high", description: "Rice absorbs arsenic from water and soil more readily than other grains. Brown rice contains more arsenic than white rice because it's concentrated in the outer bran layer." },
            { name: "Heavy metals (Cadmium, Lead)", level: "medium", description: "Can contain other heavy metals depending on growing region and water source." }
        ],
        tips: ["Rinse rice thoroughly before cooking", "Cook in excess water (6:1 ratio) and drain", "Vary grain types - don't rely solely on rice", "Basmati and jasmine rice tend to have lower arsenic", "Limit rice milk and rice cereal for young children"],
        alternatives: ["Quinoa", "Millet", "Buckwheat", "Basmati rice (lower arsenic)"]
    },
    {
        name: "Salmon (farmed)",
        category: "seafood",
        riskLevel: "medium",
        toxins: [
            { name: "PCBs (Polychlorinated biphenyls)", level: "medium", description: "Farmed salmon can contain higher PCB levels than wild-caught due to contaminated feed. PCBs are persistent organic pollutants." },
            { name: "Antibiotics residues", level: "medium", description: "Farmed fish may be treated with antibiotics. Contributes to antibiotic resistance concerns." }
        ],
        tips: ["Choose wild-caught Alaskan salmon when possible", "Remove skin and visible fat where PCBs concentrate", "Grill or broil to allow fat to drip away", "Vary fish types throughout the week"],
        alternatives: ["Wild-caught salmon", "Sardines", "Arctic char"]
    },
    {
        name: "Tuna",
        category: "seafood",
        riskLevel: "high",
        toxins: [
            { name: "Mercury (Methylmercury)", level: "high", description: "Large predatory fish that bioaccumulates mercury. Albacore (white) tuna has more mercury than skipjack (light) tuna." },
            { name: "Histamine", level: "low", description: "Improper storage can lead to histamine buildup causing scombroid poisoning." }
        ],
        tips: ["Limit albacore tuna to 6oz per week", "Choose skipjack (light) tuna which has less mercury", "Pregnant women and children should limit intake", "Vary with lower-mercury fish"],
        alternatives: ["Skipjack tuna", "Salmon", "Sardines", "Tilapia"]
    },
    {
        name: "Swordfish",
        category: "seafood",
        riskLevel: "high",
        toxins: [
            { name: "Mercury (Methylmercury)", level: "high", description: "One of the highest mercury fish. Large, long-lived predator that accumulates mercury throughout its lifespan." }
        ],
        tips: ["Eat rarely or avoid entirely", "Pregnant women and children should avoid", "Choose smaller fish species instead"],
        alternatives: ["Mahi-mahi", "Salmon", "Halibut (moderate mercury)"]
    },
    {
        name: "Chicken",
        category: "meat",
        riskLevel: "medium",
        toxins: [
            { name: "Antibiotics residues", level: "medium", description: "Conventional poultry may contain antibiotic residues despite withdrawal periods. Contributes to antibiotic-resistant bacteria." },
            { name: "Arsenic (historical)", level: "low", description: "Arsenic-based feed additives have been largely phased out but trace levels may remain in some supply chains." },
            { name: "HCAs (when grilled/charred)", level: "medium", description: "Heterocyclic amines form when meat is cooked at high temperatures. Classified as probable carcinogens." }
        ],
        tips: ["Choose organic or antibiotic-free labeled chicken", "Avoid charring - cook at moderate temperatures", "Marinate before grilling to reduce HCA formation", "Remove skin to reduce fat-soluble contaminant exposure"],
        alternatives: ["Organic/pasture-raised chicken", "Turkey", "Legumes (plant protein)"]
    },
    {
        name: "Processed Meats (hot dogs, bacon, deli meat)",
        category: "processed",
        riskLevel: "high",
        toxins: [
            { name: "Nitrites/Nitrates", level: "high", description: "Sodium nitrite used as a preservative can form nitrosamines, which are potent carcinogens. WHO classifies processed meat as a Group 1 carcinogen." },
            { name: "PAHs (Polycyclic aromatic hydrocarbons)", level: "medium", description: "Formed during smoking and high-heat processing. Some PAHs are known carcinogens." },
            { name: "Sodium & additives", level: "medium", description: "High sodium content and various preservatives including BHA, BHT, and phosphates." }
        ],
        tips: ["Limit consumption significantly", "Look for 'uncured' or 'no nitrates added' options", "Choose brands with shorter ingredient lists", "Cook bacon at lower temperatures to reduce nitrosamine formation"],
        alternatives: ["Fresh-cooked meats", "Uncured options", "Plant-based alternatives"]
    },
    {
        name: "Potatoes",
        category: "produce",
        riskLevel: "medium",
        toxins: [
            { name: "Pesticides (Chlorpropham)", level: "medium", description: "Commonly treated with sprout inhibitors. Can retain pesticide residues in the skin." },
            { name: "Solanine (natural)", level: "medium", description: "Green potatoes and sprouts contain solanine, a natural glycoalkaloid toxin. Can cause nausea, headaches, and in severe cases, neurological effects." },
            { name: "Acrylamide (when fried/roasted)", level: "medium", description: "Forms when starchy foods are cooked above 248F/120C. French fries and chips are high in acrylamide." }
        ],
        tips: ["Discard green potatoes and sprouts", "Store in cool, dark place to prevent greening", "Peel to remove surface pesticides", "Soak cut potatoes before frying to reduce acrylamide", "Bake or boil instead of frying"],
        alternatives: ["Sweet potatoes", "Organic potatoes"]
    },
    {
        name: "Peanuts",
        category: "grains",
        riskLevel: "medium",
        toxins: [
            { name: "Aflatoxins (mycotoxin)", level: "high", description: "Peanuts are particularly susceptible to Aspergillus mold which produces aflatoxins - potent liver carcinogens. Regulated but not eliminated." },
            { name: "Pesticides", level: "medium", description: "Conventionally grown peanuts may contain pesticide residues absorbed from soil." }
        ],
        tips: ["Buy from reputable brands with quality controls", "Discard any peanuts that look moldy or discolored", "Store in cool, dry conditions", "Roasting reduces but doesn't eliminate aflatoxins"],
        alternatives: ["Almonds", "Walnuts", "Sunflower seeds"]
    },
    {
        name: "Corn",
        category: "produce",
        riskLevel: "medium",
        toxins: [
            { name: "Fumonisin (mycotoxin)", level: "medium", description: "Corn is susceptible to Fusarium mold which produces fumonisins. Linked to esophageal cancer in high-exposure regions." },
            { name: "Pesticide residues", level: "low", description: "Sweet corn generally has low pesticide residues (Clean Fifteen) due to its husk protection." }
        ],
        tips: ["Sweet corn is relatively safe - on Clean Fifteen list", "Buy from trusted sources", "Store properly to prevent mold", "Corn products (chips, cereal) may have more processing-related concerns"],
        alternatives: ["Organic corn", "Other vegetables"]
    },
    {
        name: "Avocados",
        category: "produce",
        riskLevel: "low",
        toxins: [
            { name: "Pesticide residues", level: "low", description: "Thick skin protects the flesh from pesticide penetration. Consistently on the Clean Fifteen list with very low residue detection." }
        ],
        tips: ["Wash before cutting to avoid transferring surface contaminants", "Conventional is generally fine - low need for organic"],
        alternatives: []
    },
    {
        name: "Sweet Potatoes",
        category: "produce",
        riskLevel: "low",
        toxins: [
            { name: "Pesticide residues", level: "low", description: "Generally low in pesticide residues. Cleaner than regular potatoes." }
        ],
        tips: ["Wash and scrub skin before cooking", "A good alternative to regular potatoes for reducing toxin exposure"],
        alternatives: []
    },
    {
        name: "Onions",
        category: "produce",
        riskLevel: "low",
        toxins: [
            { name: "Pesticide residues", level: "low", description: "Among the cleanest conventional produce. Outer layers are removed, and natural sulfur compounds may deter pests." }
        ],
        tips: ["Remove outer layers", "Conventional onions are generally safe"],
        alternatives: []
    },
    {
        name: "Grapes",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "Can contain residues from multiple pesticides. Imported grapes may have higher levels due to different regulations." }
        ],
        tips: ["Buy organic when possible", "Wash thoroughly", "Buy domestic/in-season when possible", "Frozen organic grapes are a good option"],
        alternatives: ["Organic grapes", "Blueberries"]
    },
    {
        name: "Bell Peppers",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "On the Dirty Dozen list. Can have residues from multiple pesticides even after washing." }
        ],
        tips: ["Buy organic", "Wash well under running water", "Roasting and peeling removes some residues"],
        alternatives: ["Organic bell peppers"]
    },
    {
        name: "Milk & Dairy",
        category: "dairy",
        riskLevel: "medium",
        toxins: [
            { name: "Hormones (rBGH/rBST)", level: "medium", description: "Recombinant bovine growth hormone used to increase milk production. Banned in many countries but still used in some. May increase IGF-1 levels." },
            { name: "Antibiotic residues", level: "low", description: "Milk is tested for antibiotic residues, but trace levels below detection limits may still be present." },
            { name: "Pesticides (fat-soluble)", level: "low", description: "Fat-soluble pesticides can concentrate in dairy fat. Generally low levels due to regulation." }
        ],
        tips: ["Choose organic or rBGH-free labeled dairy", "Full-fat organic dairy is preferable to conventional", "Consider grass-fed dairy products"],
        alternatives: ["Organic dairy", "Grass-fed dairy", "Oat milk", "Almond milk"]
    },
    {
        name: "Canned Foods",
        category: "processed",
        riskLevel: "medium",
        toxins: [
            { name: "BPA (Bisphenol A)", level: "medium", description: "Can linings may contain BPA, an endocrine disruptor. Many brands are transitioning to BPA-free linings, but replacements (BPS, BPF) may have similar effects." },
            { name: "Sodium", level: "medium", description: "Often very high in added sodium as a preservative." }
        ],
        tips: ["Choose BPA-free lined cans", "Rinse canned foods to reduce sodium", "Use fresh or frozen as alternatives", "Look for brands in glass jars or Tetra Pak"],
        alternatives: ["Fresh produce", "Frozen foods", "Glass-jarred foods"]
    },
    {
        name: "Coffee",
        category: "processed",
        riskLevel: "medium",
        toxins: [
            { name: "Acrylamide", level: "medium", description: "Formed during roasting. Darker roasts may have slightly less acrylamide than lighter roasts despite higher roast temperatures." },
            { name: "Mycotoxins (Ochratoxin A)", level: "low", description: "Coffee beans can harbor mold-produced ochratoxin A. Wet-processed beans generally have lower levels." },
            { name: "Pesticides", level: "medium", description: "Coffee is one of the most heavily sprayed crops. Residues can persist through roasting." }
        ],
        tips: ["Choose organic coffee", "Opt for wet-processed beans", "Buy from reputable single-origin sources", "Moderate intake to 2-3 cups per day"],
        alternatives: ["Organic coffee", "Green tea", "Herbal tea"]
    },
    {
        name: "Celery",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "Consistently on the Dirty Dozen. No protective skin, and the stalks' grooves trap residues making them hard to wash off." }
        ],
        tips: ["Buy organic", "Wash very thoroughly, scrubbing the grooves", "Trim ends and outer stalks"],
        alternatives: ["Organic celery", "Cucumber", "Jicama"]
    },
    {
        name: "Tomatoes",
        category: "produce",
        riskLevel: "medium",
        toxins: [
            { name: "Pesticides", level: "medium", description: "Moderate pesticide residue levels. Cherry tomatoes tend to have higher residues than larger varieties." },
            { name: "Solanine (natural)", level: "low", description: "Green, unripe tomatoes contain small amounts of solanine. Fully ripe tomatoes are very low in this compound." }
        ],
        tips: ["Buy organic for cherry/grape tomatoes", "Wash well", "Eat only ripe (red) tomatoes", "Canned tomatoes in BPA-free cans are fine"],
        alternatives: ["Organic tomatoes", "Red bell peppers (for color/vitamin C)"]
    },
    {
        name: "Shrimp",
        category: "seafood",
        riskLevel: "medium",
        toxins: [
            { name: "Antibiotics", level: "medium", description: "Imported farmed shrimp may contain banned antibiotics like chloramphenicol and nitrofurans. Regulation varies widely by country." },
            { name: "Sodium tripolyphosphate", level: "low", description: "Often treated to retain water weight. Generally recognized as safe but adds sodium." }
        ],
        tips: ["Buy wild-caught domestic shrimp when possible", "Look for certification labels (BAP, ASC)", "Avoid imported farmed shrimp from countries with weak regulation"],
        alternatives: ["Wild-caught shrimp", "Wild-caught scallops"]
    },
    {
        name: "Bread & Wheat Products",
        category: "grains",
        riskLevel: "medium",
        toxins: [
            { name: "Glyphosate residues", level: "medium", description: "Glyphosate is used as a pre-harvest desiccant on wheat. Residues have been found in many bread and cereal products." },
            { name: "Potassium bromate", level: "medium", description: "Used as a flour improver in some countries (banned in EU). Classified as a possible carcinogen." },
            { name: "Mycotoxins (DON/Vomitoxin)", level: "low", description: "Wheat can be contaminated with deoxynivalenol from Fusarium mold, especially in wet growing conditions." }
        ],
        tips: ["Choose organic wheat products", "Look for 'unbromated flour' on labels", "Buy from quality bakeries", "Store bread properly to prevent mold"],
        alternatives: ["Organic bread", "Sourdough (fermentation may reduce some toxins)", "Rye bread"]
    },
    {
        name: "Peaches",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "On the Dirty Dozen list. Soft, fuzzy skin absorbs and retains pesticide residues." }
        ],
        tips: ["Buy organic", "Wash and peel if conventional", "Buy in season from local farms"],
        alternatives: ["Organic peaches", "Mangoes (lower residue)"]
    },
    {
        name: "Sardines",
        category: "seafood",
        riskLevel: "low",
        toxins: [
            { name: "Mercury", level: "low", description: "Small, short-lived fish with very low mercury bioaccumulation. One of the safest seafood choices." }
        ],
        tips: ["One of the best fish choices for low toxin exposure", "Rich in omega-3s with minimal contaminants", "Choose wild-caught, water-packed"],
        alternatives: []
    },
    {
        name: "Nectarines",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "On the Dirty Dozen list. Similar to peaches with high pesticide retention." }
        ],
        tips: ["Buy organic", "Wash and peel if conventional"],
        alternatives: ["Organic nectarines", "Mangoes", "Papaya"]
    },
    {
        name: "Cherries",
        category: "produce",
        riskLevel: "high",
        toxins: [
            { name: "Pesticides (multiple)", level: "high", description: "Added to the Dirty Dozen. Small size means higher pesticide-to-fruit ratio." }
        ],
        tips: ["Buy organic", "Wash very thoroughly", "Buy in season"],
        alternatives: ["Organic cherries", "Frozen organic cherries"]
    },
    {
        name: "Pineapple",
        category: "produce",
        riskLevel: "low",
        toxins: [
            { name: "Pesticide residues", level: "low", description: "Thick, inedible skin protects the fruit. Consistently on the Clean Fifteen." }
        ],
        tips: ["Conventional is generally fine", "Wash before cutting"],
        alternatives: []
    },
    {
        name: "Mangoes",
        category: "produce",
        riskLevel: "low",
        toxins: [
            { name: "Pesticide residues", level: "low", description: "Thick skin provides good protection. Generally low pesticide residues on the edible flesh." }
        ],
        tips: ["Wash before cutting", "Conventional is generally safe"],
        alternatives: []
    }
];

// Dirty Dozen and Clean Fifteen lists
const dirtyDozen = [
    "Strawberries", "Spinach", "Kale / Collard / Mustard Greens",
    "Peaches", "Pears", "Nectarines", "Apples", "Grapes",
    "Bell & Hot Peppers", "Cherries", "Blueberries", "Green Beans"
];

const cleanFifteen = [
    "Avocados", "Sweet Corn", "Pineapple", "Onions", "Papaya",
    "Sweet Peas (frozen)", "Asparagus", "Honeydew Melon", "Kiwi",
    "Cabbage", "Mushrooms", "Mangoes", "Sweet Potatoes", "Watermelon", "Carrots"
];

// ===== DOM Elements =====
const searchInput = document.getElementById('foodSearch');
const searchBtn = document.getElementById('searchBtn');
const resultsGrid = document.getElementById('searchResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('foodModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

let currentFilter = 'all';

// ===== Initialize =====
function init() {
    renderResults(foodDatabase);
    renderDirtyDozen();
    renderCleanFifteen();
    setupEventListeners();
}

// ===== Render Functions =====
function renderResults(foods) {
    if (foods.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <h3>No foods found</h3>
                <p>Try a different search term or filter.</p>
            </div>`;
        return;
    }

    resultsGrid.innerHTML = foods.map(food => `
        <div class="food-card" data-food="${encodeAttribute(food.name)}">
            <div class="food-card-header">
                <div>
                    <h3>${escapeHtml(food.name)}</h3>
                    <span class="food-category">${escapeHtml(food.category)}</span>
                </div>
                <span class="risk-indicator risk-${food.riskLevel}">${food.riskLevel.charAt(0).toUpperCase() + food.riskLevel.slice(1)} Risk</span>
            </div>
            <div class="toxin-list">
                ${food.toxins.map(t => `<span class="toxin-tag ${t.level}">${escapeHtml(t.name.split('(')[0].trim())}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.food-card').forEach(card => {
        card.addEventListener('click', () => {
            const foodName = decodeAttribute(card.dataset.food);
            const food = foodDatabase.find(f => f.name === foodName);
            if (food) openModal(food);
        });
    });
}

function renderDirtyDozen() {
    const list = document.getElementById('dirtyDozenList');
    list.innerHTML = dirtyDozen.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderCleanFifteen() {
    const list = document.getElementById('cleanFifteenList');
    list.innerHTML = cleanFifteen.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function openModal(food) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${escapeHtml(food.name)}</h2>
            <span class="food-category">${escapeHtml(food.category)}</span>
            <span class="risk-indicator risk-${food.riskLevel}" style="margin-left:8px">${food.riskLevel.charAt(0).toUpperCase() + food.riskLevel.slice(1)} Risk</span>
        </div>

        <div class="modal-section">
            <h3>Potential Toxins</h3>
            ${food.toxins.map(t => `
                <div class="toxin-detail ${t.level}">
                    <h4>${escapeHtml(t.name)}</h4>
                    <p>${escapeHtml(t.description)}</p>
                </div>
            `).join('')}
        </div>

        <div class="modal-section">
            <h3>How to Reduce Exposure</h3>
            <ul class="avoidance-tips">
                ${food.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}
            </ul>
        </div>

        ${food.alternatives.length > 0 ? `
        <div class="modal-section">
            <h3>Safer Alternatives</h3>
            <div class="safer-alternatives">
                ${food.alternatives.map(alt => `<span class="alt-tag">${escapeHtml(alt)}</span>`).join('')}
            </div>
        </div>
        ` : ''}
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Search & Filter =====
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    let filtered = foodDatabase;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(f => f.category === currentFilter);
    }

    if (query) {
        filtered = filtered.filter(f =>
            f.name.toLowerCase().includes(query) ||
            f.category.toLowerCase().includes(query) ||
            f.toxins.some(t => t.name.toLowerCase().includes(query))
        );
    }

    renderResults(filtered);
}

// ===== Event Listeners =====
function setupEventListeners() {
    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') performSearch();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            performSearch();
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ===== Utility =====
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function encodeAttribute(str) {
    return encodeURIComponent(str);
}

function decodeAttribute(str) {
    return decodeURIComponent(str);
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
