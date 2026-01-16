import React, { useState } from 'react';
import { BookOpen, Users, ChefHat, Award, Calendar, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const EducationServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workshops' | 'training' | 'catering' | 'events'>('workshops');

  const workshops = [
    {
      title: 'Taste of Cameroon',
      description: 'Learn authentic Cameroon cooking techniques in this immersive 2-hour class',
      price: '₩35,000',
      duration: '2 hours',
      capacity: '12 participants',
      schedule: 'Weekends 10:00 AM & 3:00 PM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop'
    },
    {
      title: 'Korean-African Fusion Cooking',
      description: 'Discover how to blend Korean and African flavors in creative new dishes',
      price: '₩42,000',
      duration: '3 hours',
      capacity: '10 participants',
      schedule: 'Saturdays 2:00 PM',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop'
    },
    {
      title: 'African Spice Mastery',
      description: 'Explore the rich variety of African spices and their traditional uses',
      price: '₩28,000',
      duration: '90 minutes',
      capacity: '15 participants',
      schedule: 'Weekdays 6:00 PM',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop'
    },
    {
      title: 'Traditional African Bread',
      description: 'Master the art of making traditional African breads and pastries',
      price: '₩38,000',
      duration: '2.5 hours',
      capacity: '12 participants',
      schedule: 'Sundays 10:00 AM',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop'
    }
  ];

  const trainingPrograms = [
    {
      title: 'Food Truck Bootcamp',
      description: 'Complete entrepreneurship program for starting an African food business',
      duration: '6 weeks',
      price: '₩480,000',
      topics: ['Business Planning', 'Menu Development', 'Operations', 'Marketing', 'Food Safety'],
      startDate: 'Feb 10, 2026'
    },
    {
      title: 'Culinary Internship',
      description: 'Hands-on professional training and cultural exchange program',
      duration: '8 weeks',
      price: '₩240,000',
      topics: ['Advanced Techniques', 'Kitchen Management', 'Cultural Heritage', 'Customer Service'],
      startDate: 'Feb 24, 2026'
    },
    {
      title: 'Professional Chef Certification',
      description: 'Comprehensive certification in African and fusion cuisine',
      duration: '12 weeks',
      price: '₩720,000',
      topics: ['Advanced Cooking', 'Food Science', 'Nutrition', 'Menu Planning', 'Restaurant Management'],
      startDate: 'Mar 10, 2026'
    }
  ];

  const cateringServices = [
    { type: 'Private Event Catering', capacity: '20-500 guests', minOrder: '₩500,000', description: 'Customized menus for your special event' },
    { type: 'Corporate Catering', capacity: 'Flexible', minOrder: '₩300,000', description: 'Professional catering for business events' },
    { type: 'Weekly Meal Prep', capacity: 'Individual/Family', minOrder: '₩150,000', description: 'Healthy meal plans delivered weekly' },
    { type: 'Festival Catering', capacity: '100-1000+ guests', minOrder: '₩1,000,000', description: 'Large-scale event catering' }
  ];

  const events = [
    {
      title: 'Cultural Festival',
      date: 'March 15, 2026',
      time: '11:00 AM - 6:00 PM',
      location: 'Maavii Events Space',
      description: 'Celebrate African culture with food, music, and crafts'
    },
    {
      title: 'Themed Dinner Night',
      date: 'March 22, 2026',
      time: '7:00 PM - 10:00 PM',
      location: 'Maavii Restaurant',
      description: 'Chef\'s special 5-course fusion menu with wine pairings'
    },
    {
      title: 'Beginner Cooking Workshop',
      date: 'March 29, 2026',
      time: '2:00 PM - 4:30 PM',
      location: 'Maavii Kitchen Studio',
      description: 'Perfect for first-time cookers - learn African basics'
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-right">
        <a 
          href="/educationItems" 
          className="inline-block px-6 py-3 bg-maaviiOrange text-cream rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          View Full Education Services Page
        </a>
      </div>
      <Container>
        <SectionTitle
          title="Education & Professional Services"
          subtitle="Learn, grow, and master African cuisine"
        />
        <div className="text-center mb-8">
          <a 
            href="/educationItems" 
            className="inline-block px-8 py-4 bg-maaviiTeal text-cream rounded-xl font-black text-xl hover:bg-teal-700 transition-colors"
          >
            Explore Full Education Programs
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'workshops', label: 'Workshops', icon: ChefHat },
            { id: 'training', label: 'Training Programs', icon: Award },
            { id: 'catering', label: 'Catering', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all border-3 ${
                  activeTab === tab.id
                    ? 'bg-maaviiTeal text-cream border-charcoal'
                    : 'bg-cream border-charcoal/10 text-charcoal hover:border-maaviiTeal'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Workshops */}
        {activeTab === 'workshops' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.map((workshop, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border-3 border-charcoal/5 hover:shadow-xl transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-charcoal mb-3">{workshop.title}</h3>
                    <p className="text-charcoal/60 font-serif mb-6">{workshop.description}</p>
                    <div className="space-y-2 mb-6 text-sm font-bold text-charcoal/70">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {workshop.capacity}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {workshop.schedule}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-maaviiOrange">{workshop.price}</span>
                      <button className="px-6 py-3 bg-charcoal text-cream rounded-lg font-bold hover:bg-maaviiOrange transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Training Programs */}
        {activeTab === 'training' && (
          <div className="space-y-8">
            {trainingPrograms.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border-3 border-charcoal/5 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-black text-charcoal mb-3">{program.title}</h3>
                    <p className="text-charcoal/60 font-serif mb-6">{program.description}</p>
                    <div className="space-y-2 text-charcoal/70 font-serif">
                      <p><strong>Duration:</strong> {program.duration}</p>
                      <p><strong>Start Date:</strong> {program.startDate}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-charcoal mb-4 uppercase">Topics Covered</h4>
                    <ul className="space-y-2 text-charcoal/70 font-serif">
                      {program.topics.map((topic, i) => (
                        <li key={i}>✓ {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-maaviiOrange mb-6">{program.price}</div>
                    <button className="w-full px-6 py-4 bg-charcoal text-cream rounded-xl font-black hover:bg-maaviiOrange transition-colors mb-3">
                      Apply Now
                    </button>
                    <button className="w-full px-6 py-2 bg-cream border-2 border-charcoal text-charcoal rounded-xl font-bold hover:bg-charcoal/5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Catering */}
        {activeTab === 'catering' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {cateringServices.map((service, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl border-3 border-charcoal/5 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-black text-charcoal mb-2">{service.type}</h3>
                  <p className="text-charcoal/60 font-serif mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6 text-charcoal/70 font-bold">
                    <p><strong>Capacity:</strong> {service.capacity}</p>
                    <p><strong>Minimum Order:</strong> <span className="text-maaviiOrange text-lg">{service.minOrder}</span></p>
                  </div>
                  <button className="w-full px-6 py-4 bg-charcoal text-cream rounded-lg font-black hover:bg-maaviiOrange transition-colors">
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
            <div className="p-8 bg-maaviiYellow/10 rounded-2xl border-3 border-maaviiYellow">
              <h4 className="text-2xl font-black text-charcoal mb-4">Catering Inquiry Form</h4>
              <p className="text-charcoal/70 font-serif mb-6">
                Tell us about your event and we'll create a customized catering proposal just for you.
              </p>
              <button className="px-8 py-4 bg-charcoal text-cream rounded-lg font-black hover:bg-maaviiOrange transition-colors">
                Start Catering Inquiry
              </button>
            </div>
          </div>
        )}

        {/* Events */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            {events.map((event, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border-3 border-charcoal/5 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-charcoal mb-4">{event.title}</h3>
                    <div className="space-y-3 text-charcoal/70 font-serif mb-6">
                      <p><strong>Date:</strong> {event.date}</p>
                      <p><strong>Time:</strong> {event.time}</p>
                      <p><strong>Location:</strong> {event.location}</p>
                    </div>
                    <p className="text-charcoal/60 font-serif">{event.description}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="px-8 py-4 bg-maaviiTeal text-cream rounded-lg font-black hover:bg-teal-700 transition-colors whitespace-nowrap">
                      Register
                    </button>
                    <button className="px-8 py-4 bg-cream border-2 border-charcoal text-charcoal rounded-lg font-bold hover:bg-charcoal/5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default EducationServices;
