import React, { useMemo, useState } from 'react';
import { Search, ShoppingCart, UserRound, ShieldCheck, Truck, Headset, Pill, HeartPulse, Baby, Sparkles, Stethoscope, Leaf, Plus, Minus, X, Menu } from 'lucide-react';

const products = [
  { id: 1, name: 'Paracetamol 500mg', detail: '20 tablets · OTC sample', price: 250, category: 'Medicines', icon: '💊', color: 'blue' },
  { id: 2, name: 'Vitamin C 1000mg', detail: '60 tablets', price: 1250, category: 'Vitamins', icon: '🍊', color: 'orange' },
  { id: 3, name: 'Gentle Skin Cleanser', detail: '250 ml', price: 2800, category: 'Personal Care', icon: '🧴', color: 'mint' },
  { id: 4, name: 'Digital Thermometer', detail: '1 unit', price: 1200, category: 'Equipment', icon: '🌡️', color: 'blue' },
  { id: 5, name: 'Daily Wellness Pack', detail: '30 day pack', price: 1850, category: 'Wellness', icon: '🌿', color: 'mint' },
  { id: 6, name: 'Baby Care Essentials', detail: 'Starter set', price: 3500, category: 'Baby Care', icon: '🧸', color: 'pink' },
  { id: 7, name: 'Adhesive Bandages', detail: 'Pack of 20', price: 450, category: 'First Aid', icon: '🩹', color: 'pink' },
  { id: 8, name: 'Antiseptic Solution', detail: '100 ml', price: 680, category: 'First Aid', icon: '🧴', color: 'mint' },
  { id: 9, name: 'Zinc Tablets', detail: '30 tablets', price: 950, category: 'Vitamins', icon: '💊', color: 'orange' },
  { id: 10, name: 'Reusable Hot Water Bottle', detail: '1 unit', price: 1650, category: 'Equipment', icon: '🫙', color: 'blue' },
  { id: 11, name: 'Hand Sanitizer', detail: '250 ml', price: 790, category: 'Personal Care', icon: '🧼', color: 'mint' },
  { id: 12, name: 'Moisturising Lotion', detail: '200 ml', price: 1950, category: 'Personal Care', icon: '🧴', color: 'pink' },
  { id: 13, name: 'Baby Gentle Shampoo', detail: '200 ml', price: 1350, category: 'Baby Care', icon: '🧴', color: 'blue' },
  { id: 14, name: 'Digital Blood Pressure Monitor', detail: '1 unit', price: 8900, category: 'Equipment', icon: '🩺', color: 'blue' },
  { id: 15, name: 'Multivitamin Tablets', detail: '30 tablets', price: 2100, category: 'Vitamins', icon: '🌈', color: 'orange' },
  { id: 16, name: 'Cotton Wool Roll', detail: '100 g', price: 520, category: 'First Aid', icon: '🩹', color: 'pink' },
  { id: 17, name: 'Aloe Vera Gel', detail: '100 ml', price: 1100, category: 'Wellness', icon: '🌱', color: 'mint' },
  { id: 18, name: 'Digital Weighing Scale', detail: '1 unit', price: 4200, category: 'Equipment', icon: '⚖️', color: 'blue' }
];
const categories = [
  { name: 'All', label: 'All Products', icon: Pill },
  { name: 'Medicines', label: 'Medicines', icon: Pill },
  { name: 'Vitamins', label: 'Vitamins & Supplements', icon: Sparkles },
  { name: 'Baby Care', label: 'Baby & Mother Care', icon: Baby },
  { name: 'Personal Care', label: 'Personal Care', icon: HeartPulse },
  { name: 'Equipment', label: 'Health Equipment', icon: Stethoscope },
  { name: 'First Aid', label: 'First Aid', icon: ShieldCheck },
  { name: 'Wellness', label: 'Wellness & Others', icon: Leaf }
];
const money = n => 'LKR ' + n.toLocaleString('en-LK');

export default function MediCart() {
  const [cart, setCart] = useState({});
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const visible = useMemo(() => products.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
  ), [query, category]);
  const total = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
  const add = p => { setCart(old => ({ ...old, [p.id]: (old[p.id] || 0) + 1 })); setNotice(`${p.name} added to cart`); setTimeout(() => setNotice(''), 2200); };
  const change = (id, amount) => setCart(old => { const next = { ...old, [id]: Math.max(0, (old[id] || 0) + amount) }; if (!next[id]) delete next[id]; return next; });
  const checkout = () => setNotice(count ? 'Demo checkout ready — no payment has been taken.' : 'Your cart is empty.');

  return <div className="site-shell">
    <div className="announcement"><span>✨ Your health, delivered with care</span><span>Islandwide delivery · Demo store</span></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="MediCart home"><span className="brand-mark"><Plus size={28}/></span><span><b>Medi<span>Cart</span></b><small>Your Health, Our Priority</small></span></a>
      <button className="menu-toggle" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation"><Menu/></button>
      <nav className={mobileNav ? 'nav open' : 'nav'}><a href="#home" onClick={() => setMobileNav(false)}>Home</a><a href="#shop" onClick={() => setMobileNav(false)}>Shop</a><a href="#why" onClick={() => setMobileNav(false)}>Why MediCart</a></nav>
      <label className="search"><Search size={19}/><input aria-label="Search products" placeholder="Search medicines, health products..." value={query} onChange={e => {setQuery(e.target.value); document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});}}/><kbd>⌕</kbd></label>
      <button className="account" onClick={() => setNotice('Account sign-in is not enabled in this demo.')}><UserRound size={19}/><span>Account</span></button>
      <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${count} items`}><ShoppingCart size={21}/><span>Cart</span><b>{count}</b></button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><span className="eyebrow"><span className="pulse"></span> YOUR HEALTH, MADE SIMPLE</span><h1>Wellness starts<br/>right at your <em>door.</em></h1><p>Shop trusted health essentials with a little more care. Find what you need and let us bring it to you.</p><div className="hero-actions"><a className="primary-btn" href="#shop">Explore products <span>→</span></a><a className="text-btn" href="#why">Why MediCart <span>↗</span></a></div><div className="hero-rating"><div className="avatar-stack"><i>☺</i><i>✿</i><i>+</i></div><span><b>Care you can count on</b><small>A simpler way to shop for wellness</small></span></div></div>
        <div className="hero-art"><div className="art-glow"></div><div className="art-card art-card-top"><ShieldCheck size={20}/><span><b>Trusted essentials</b><small>Selected with care</small></span></div><div className="medicine-scene"><div className="cross-badge"><Plus size={30}/></div><div className="bottle bottle-one"><div className="cap"></div><span>VITAMIN<br/><b>C+</b></span></div><div className="bottle bottle-two"><div className="cap"></div><span><b>Medi</b><br/>CARE</span></div><div className="capsules"><i></i><i></i><i></i><i></i><i></i></div><div className="scene-leaf leaf-one"></div><div className="scene-leaf leaf-two"></div></div><div className="art-card art-card-bottom"><span className="delivery-icon"><Truck size={21}/></span><span><b>Care at your doorstep</b><small>Convenience with every order</small></span></div><div className="floating-plus">+</div></div>
        <div className="hero-benefits"><div><span><Truck/></span><p><b>Easy delivery</b><small>Convenient ordering</small></p></div><div><span><ShieldCheck/></span><p><b>Trusted essentials</b><small>Quality comes first</small></p></div><div><span><Headset/></span><p><b>Here to help</b><small>Support when you need it</small></p></div></div>
      </section>
      <section className="trust-strip" id="why"><div><ShieldCheck/><span><b>Thoughtful selection</b><small>Everyday health essentials</small></span></div><div><Truck/><span><b>Simple ordering</b><small>Shop from your own home</small></span></div><div><HeartPulse/><span><b>Wellness first</b><small>Care in every detail</small></span></div></section>
      <section className="categories-section"><div className="section-heading"><div><span className="eyebrow">FIND YOUR EVERYDAY ESSENTIALS</span><h2>Shop by <em>category</em></h2><p>A little care for every part of your day.</p></div><a href="#shop" className="view-link">Browse all <span>→</span></a></div><div className="category-grid">{categories.map(({name,label,icon:Icon},i)=><button key={name} className={`category-tile tile-${i} ${category===name?'selected':''}`} onClick={()=>{setCategory(name);document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});}}><span className="category-icon"><Icon size={26}/></span><b>{label}</b><span className="tile-arrow">↗</span></button>)}</div></section>
      <section className="products-section" id="shop"><div className="section-heading"><div><span className="eyebrow">EXPLORE THE MEDICART CATALOGUE</span><h2>Everyday <em>essentials</em></h2><p>Small things that can make caring for yourself easier.</p></div><span className="product-count">{visible.length} products</span></div><div className="filter-row"><div className="filter-pills">{categories.map(({name,label})=><button key={name} className={category===name?'active':''} onClick={()=>setCategory(name)}>{name==='All'?'All products':label}</button>)}</div><span className="demo-label">SAMPLE CATALOGUE</span></div>
        {visible.length ? <div className="product-grid">{visible.map((p,i)=><article className="product-card" key={p.id}><div className={`product-visual ${p.color}`}><span className="product-number">0{i+1}</span><span className="product-emoji">{p.icon}</span><button className="quick-add" onClick={()=>add(p)} aria-label={`Add ${p.name} to cart`}><Plus size={18}/></button></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><p>{p.detail}</p><div className="product-bottom"><b>{money(p.price)}</b><button onClick={()=>add(p)} className="add-btn"><Plus size={15}/> Add</button></div></div></article>)}</div> : <div className="empty-state"><Search size={30}/><h3>No products found</h3><p>Try a different search or category.</p><button className="primary-btn" onClick={()=>{setQuery('');setCategory('All');}}>Show all products</button></div>}
      </section>
      <section className="care-banner"><div className="care-symbol"><HeartPulse size={34}/></div><div><span className="eyebrow">A GENTLER WAY TO SHOP</span><h2>Your wellbeing is always worth <em>caring for.</em></h2><p>Explore everyday essentials in one simple place.</p></div><a href="#shop" className="light-btn">Explore the shop <span>→</span></a><span className="banner-decoration">✳</span></section>
    </main>
    <footer><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Plus size={26}/></span><span><b>Medi<span>Cart</span></b><small>Your Health, Our Priority</small></span></a><p>Making everyday wellness feel a little simpler.</p></div><div><h4>Explore</h4><a href="#home">Home</a><a href="#shop">Shop products</a><a href="#why">Why MediCart</a></div><div><h4>Customer care</h4><a href="#why">How it works</a><a href="#why">Delivery information</a><a href="#why">Contact support</a></div><div className="footer-note"><span className="footer-heart">♡</span><h4>Care starts here</h4><p>This is a student demo website. Products and prices are illustrative. Medicine listings are sample data, not medical advice.</p></div></div><div className="footer-bottom"><span>© 2026 MediCart · Educational demo project</span><span>Built with care, React & DevOps automation</span></div></footer>
    {notice && <div role="status" className="toast"><span>✓</span>{notice}<button onClick={()=>setNotice('')} aria-label="Dismiss message"><X size={16}/></button></div>}
    {cartOpen && <div className="drawer-backdrop" onClick={()=>setCartOpen(false)}><aside className="cart-drawer" onClick={e=>e.stopPropagation()}><div className="drawer-head"><div><span className="eyebrow">YOUR SELECTION</span><h2>Your cart <em>({count})</em></h2></div><button onClick={()=>setCartOpen(false)} aria-label="Close cart"><X/></button></div>{count===0?<div className="cart-empty"><ShoppingCart size={42}/><h3>Your cart is taking a rest</h3><p>Add a few essentials and they will appear here.</p><button className="primary-btn" onClick={()=>setCartOpen(false)}>Explore products</button></div>:<><div className="cart-items">{products.filter(p=>cart[p.id]).map(p=><div className="cart-item" key={p.id}><div className={`cart-item-icon ${p.color}`}>{p.icon}</div><div className="cart-item-info"><b>{p.name}</b><small>{money(p.price)} each</small><div className="qty-control"><button onClick={()=>change(p.id,-1)} aria-label={`Decrease ${p.name} quantity`}><Minus size={13}/></button><span>{cart[p.id]}</span><button onClick={()=>change(p.id,1)} aria-label={`Increase ${p.name} quantity`}><Plus size={13}/></button></div></div><b className="line-total">{money(p.price*cart[p.id])}</b></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><b>{money(total)}</b></div><p>Delivery charges, if applicable, are not included in this demo.</p><button className="primary-btn checkout-btn" onClick={checkout}>Continue to demo checkout <span>→</span></button><small className="safe-note"><ShieldCheck size={14}/> Demo only — no real payment or order is created.</small></div></>}</aside></div>}
  </div>;
}
