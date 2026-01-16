
import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-charcoal/5 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-deepRed" />
            {t('cartTitle')} ({itemCount})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-charcoal/5 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-charcoal/40 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="text-xl font-serif">{t('cartEmpty')}</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <img src={item.image} alt={item.name[language]} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-charcoal leading-tight">{item.name[language]}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-charcoal/20 hover:text-deepRed transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-deepRed font-bold">₩ {item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center border border-charcoal/10 rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 px-2 hover:bg-charcoal/5"><Minus className="w-3 h-3" /></button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 px-2 hover:bg-charcoal/5"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-charcoal/[0.02] border-t border-charcoal/5 space-y-4">
          {cart.length > 0 && (
            <div className="flex justify-between items-center text-xl font-bold">
              <span>{t('total')}</span>
              <span className="text-deepRed">₩ {cartTotal.toLocaleString()}</span>
            </div>
          )}
          <button 
            onClick={() => {
              // Close the cart sidebar and navigate to ordering page
              onClose();
              window.location.href = '/ordering';
            }}
            className="w-full bg-maaviiOrange text-cream py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-maaviiOrange/20"
          >
            Order Now
          </button>
          {cart.length > 0 && (
            <button className="w-full bg-deepRed text-cream py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-deepRed/20">
              {t('checkout')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
