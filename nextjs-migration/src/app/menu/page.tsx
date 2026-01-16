import Menu from '@/components/Menu';

export const metadata = {
    title: 'Maavii | Menu',
    description: 'Explore our fusion menu featuring African and Korean flavors.',
};

export default function MenuPage() {
    return (
        <div className="pt-24 min-h-screen bg-cream text-charcoal">
            <Menu />
        </div>
    );
}
