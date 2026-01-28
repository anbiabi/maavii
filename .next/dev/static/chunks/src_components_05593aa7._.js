(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Container({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = Container;
const __TURBOPACK__default__export__ = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FullMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Helper to format price
const formatPrice = (price)=>`$${price.toFixed(2)}`;
// Raw data from file listing
const rawMenuItems = [
    {
        file: "02_roasted_chicken_pieces.jpg",
        cat: "Mains",
        price: 4
    },
    {
        file: "03_chicken_vegetable_skewers.jpg",
        cat: "Grill",
        price: 4
    },
    {
        file: "04_fried_dough_balls_bolinho.jpg",
        cat: "Starters",
        price: 3
    },
    {
        file: "croquettes.jpg",
        cat: "Starters",
        price: 3
    },
    {
        file: "salad_vinaigrette_1.jpg",
        cat: "Starters",
        price: 3
    },
    {
        file: "salade.jpg",
        cat: "Starters",
        price: 3
    },
    {
        file: "cake.jpg",
        cat: "Desserts",
        price: 4
    },
    {
        file: "gateau.jpeg",
        cat: "Desserts",
        price: 5
    },
    {
        file: "gateaux.jpeg",
        cat: "Desserts",
        price: 5
    },
    {
        file: "10_fried_pastries_pastel.jpg",
        cat: "Starters",
        price: 3.5
    },
    {
        file: "11_rolled_crepes_panquecas.jpg",
        cat: "Desserts",
        price: 5
    },
    {
        file: "boiled_cassava_manioc.png",
        cat: "Mains",
        price: 7
    },
    {
        file: "cabage stew.jpg",
        cat: "Mains",
        price: 8
    },
    {
        file: "cameroonian-meal-platter.jpg",
        cat: "Specials",
        price: 45
    },
    {
        file: "ndole-fish-meal.jpg",
        cat: "Specials",
        price: 45
    },
    {
        file: "party-menu.jpg",
        cat: "Specials",
        price: 45
    },
    {
        file: "party-platter.jpg.jpg",
        cat: "Specials",
        price: 45
    },
    {
        file: "Party_table.jpg",
        cat: "Specials",
        price: 45
    },
    {
        file: "chapati_flatbread.jpg",
        cat: "Sides",
        price: 3
    },
    {
        file: "chicken ocra.jpg",
        cat: "Mains",
        price: 10
    },
    {
        file: "colorful-meat-skewers.jpg",
        cat: "Grill",
        price: 5
    },
    {
        file: "corn_fufu_couscous_mais.jpg",
        cat: "Mains",
        price: 8
    },
    {
        file: "crepes.jpg",
        cat: "Desserts",
        price: 2
    },
    {
        file: "cut_fritters.jpg",
        cat: "Starters",
        price: 4.5
    },
    {
        file: "eru.jpg",
        cat: "Mains",
        price: 12
    },
    {
        file: "fish_rolls_pastries.jpg",
        cat: "Starters",
        price: 4
    },
    {
        file: "fried fish.jpg",
        cat: "Mains",
        price: 9
    },
    {
        file: "fried vegetable.jpg",
        cat: "Mains",
        price: 10
    },
    {
        file: "meat-pie.jpg",
        cat: "Starters",
        price: 3.5
    },
    {
        file: "ndole-fish-meal.jpg",
        cat: "Mains",
        price: 12
    },
    {
        file: "ndole_bitterleaf_stew.jpg",
        cat: "Mains",
        price: 10
    },
    {
        file: "okra_soup_with_meat_fish.jpg",
        cat: "Mains",
        price: 7.5
    },
    {
        file: "piment.jpg",
        cat: "Sides",
        price: 2
    },
    {
        file: "pili-pili.jpg",
        cat: "Sides",
        price: 3
    },
    {
        file: "plantain-meat_mix.jpg",
        cat: "Starters",
        price: 12
    },
    {
        file: "poisson_frit_fried_fish.jpg",
        cat: "Mains",
        price: 8
    },
    {
        file: "puff puff.jpg",
        cat: "Starters",
        price: 4
    },
    {
        file: "meat-pie-raw.jpg",
        cat: "Mains",
        price: 8
    },
    {
        file: "rolled-meat-pie.jpg",
        cat: "Starters",
        price: 4
    },
    {
        file: "rosted fish.jpg",
        cat: "Mains",
        price: 12
    },
    {
        file: "rosted_fish_plantain.jpg",
        cat: "Mains",
        price: 10
    },
    {
        file: "salad.jpg",
        cat: "Starters",
        price: 8
    },
    {
        file: "sauce_arachide_peanut_soup.jpg",
        cat: "Mains",
        price: 12
    },
    {
        file: "soya_beef_skewer.jpg",
        cat: "Grill",
        price: 4
    },
    {
        file: "steamed-spaghetti.jpg",
        cat: "Mains",
        price: 8
    },
    {
        file: "stew.jpg",
        cat: "Mains",
        price: 12
    },
    {
        file: "water_fufu.jpg",
        cat: "Sides",
        price: 4
    },
    {
        file: "couscous stew.jpg",
        cat: "Mains",
        price: 12
    }
];
const FullMenu = ()=>{
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [addedId, setAddedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Generate menu items efficiently
    const menuItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FullMenu.useMemo[menuItems]": ()=>{
            return rawMenuItems.map({
                "FullMenu.useMemo[menuItems]": (item, index)=>{
                    // Clean up name
                    let name = item.file.replace(/\.(jpg|jpeg|png|webp)$/i, '') // remove extension
                    .replace(/^\d+[_ ]*/, '') // remove leading numbers
                    .replace(/[_]/g, ' ') // replace underscores with spaces
                    .replace(/([A-Z])/g, ' $1') // space before caps if camelCase
                    .trim();
                    // Capitalize First Letter of each word
                    name = name.split(' ').map({
                        "FullMenu.useMemo[menuItems]": (s)=>s.charAt(0).toUpperCase() + s.slice(1)
                    }["FullMenu.useMemo[menuItems]"]).join(' ');
                    return {
                        id: `menu-item-${index}`,
                        name: name,
                        priceNum: item.price,
                        priceStr: formatPrice(item.price),
                        description: `Authentic ${name.toLowerCase()} prepared with fresh ingredients and traditional spices.`,
                        category: item.cat,
                        image: `/images/food/${item.file}`
                    };
                }
            }["FullMenu.useMemo[menuItems]"]);
        }
    }["FullMenu.useMemo[menuItems]"], []);
    const categories = Array.from(new Set(menuItems.map((item)=>item.category)));
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredItems = menuItems.filter((item)=>{
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const handleAddToCart = (item)=>{
        // Construct the expected MenuItem type for the context
        const contextItem = {
            id: item.id,
            name: {
                EN: item.name,
                KR: item.name
            },
            description: {
                EN: item.description,
                KR: item.description
            },
            price: item.priceNum,
            category: item.category.toLowerCase(),
            image: item.image
        };
        addToCart(contextItem);
        setAddedId(item.id);
        setTimeout(()=>setAddedId(null), 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-cream min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4",
                            children: "Maavii Menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto",
                            children: "Explore our complete selection of savory dishes, snacks, and sweet treats."
                        }, void 0, false, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FullMenu.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-30 bg-cream/95 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-charcoal/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory("All"),
                                    className: `px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all ${activeCategory === "All" ? "bg-charcoal text-maaviiYellow shadow-md" : "bg-white text-charcoal border border-charcoal/10 hover:bg-gray-100"}`,
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FullMenu.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(category),
                                        className: `px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all ${activeCategory === category ? "bg-charcoal text-maaviiYellow shadow-md" : "bg-white text-charcoal border border-charcoal/10 hover:bg-gray-100"}`,
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/src/components/FullMenu.tsx",
                                        lineNumber: 160,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full md:w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search for a dish...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-6 pr-12 py-3 rounded-full border-2 border-charcoal/10 bg-white focus:border-maaviiOrange focus:ring-0 outline-none transition-all font-serif"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FullMenu.tsx",
                                    lineNumber: 175,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 184,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FullMenu.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FullMenu.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 174,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FullMenu.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10",
                    children: filteredItems.map((item)=>{
                        const isJustAdded = addedId === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-white rounded-[2.5rem] overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-2xl hover:border-maaviiOrange/30 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[4/3] relative overflow-hidden bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.image,
                                            alt: item.name,
                                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 199,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 206,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-charcoal font-black shadow-lg border border-charcoal/10",
                                            children: item.priceStr
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 209,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAddToCart(item),
                                            className: `absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 ${isJustAdded ? 'bg-maaviiTeal scale-125 rotate-12' : 'bg-maaviiOrange hover:scale-110 border-2 border-white'}`,
                                            title: "Add to Cart",
                                            children: isJustAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-6 w-6",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 3,
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FullMenu.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FullMenu.tsx",
                                                lineNumber: 224,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-6 w-6",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FullMenu.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FullMenu.tsx",
                                                lineNumber: 228,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 214,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FullMenu.tsx",
                                    lineNumber: 198,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 flex flex-col flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black text-maaviiOrange uppercase tracking-[0.2em] mb-3 block",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 237,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-black text-charcoal mb-3 leading-tight group-hover:text-maaviiTeal transition-colors",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 240,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-charcoal/60 font-serif text-sm leading-relaxed mb-6 flex-grow line-clamp-3",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 243,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAddToCart(item),
                                            className: `mt-4 w-full py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all ${isJustAdded ? 'bg-maaviiTeal text-white' : 'bg-charcoal text-white hover:bg-maaviiOrange'}`,
                                            children: isJustAdded ? '✓ ADDED TO CART' : '+ ADD TO CART'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FullMenu.tsx",
                                            lineNumber: 248,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FullMenu.tsx",
                                    lineNumber: 236,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 196,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/FullMenu.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 text-charcoal/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-serif italic",
                            children: "No dishes found matching your criteria."
                        }, void 0, false, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 266,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveCategory("All");
                                setSearchQuery("");
                            },
                            className: "mt-4 text-maaviiOrange font-bold hover:underline",
                            children: "Clear Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FullMenu.tsx",
                            lineNumber: 267,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FullMenu.tsx",
                    lineNumber: 265,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FullMenu.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FullMenu.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FullMenu, "/SrMg8trZto2qJZC916T6sre3KI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = FullMenu;
const __TURBOPACK__default__export__ = FullMenu;
var _c;
__turbopack_context__.k.register(_c, "FullMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_05593aa7._.js.map