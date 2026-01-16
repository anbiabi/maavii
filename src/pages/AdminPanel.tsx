import React, { useState } from 'react';
import { Upload, FileImage, Trash2, Edit2 } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'grocery' | 'workshops'>('menu');
  const [uploadedFiles, setUploadedFiles] = useState<{ id: string; name: string; date: string; type: string }[]>([
    { id: '1', name: 'brochettes.jpg', date: 'Jan 5, 2026', type: 'Menu Item' },
    { id: '2', name: 'palm-oil.jpg', date: 'Jan 3, 2026', type: 'Grocery' },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadedFiles(prev => [...prev, {
          id: String(Date.now() + i),
          name: file.name,
          date: new Date().toLocaleDateString(),
          type: activeTab === 'menu' ? 'Menu Item' : activeTab === 'grocery' ? 'Grocery' : 'Workshop'
        }]);
      }
    }
  };

  const handleDelete = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <Container>
        <SectionTitle
          title="Admin Panel"
          subtitle="Manage content and upload images"
        />

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { id: 'menu', label: 'Menu Items', count: 12 },
            { id: 'grocery', label: 'Grocery Items', count: 24 },
            { id: 'workshops', label: 'Workshops', count: 8 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-6 rounded-xl font-bold text-lg transition-all border-3 ${
                activeTab === tab.id
                  ? 'bg-maaviiTeal text-cream border-charcoal'
                  : 'bg-white border-charcoal/10 text-charcoal hover:border-maaviiTeal'
              }`}
            >
              <div className="text-3xl font-black mb-2">{tab.count}</div>
              <div>{tab.label}</div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border-3 border-charcoal/5">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-charcoal mb-6 uppercase">
              Upload {activeTab === 'menu' ? 'Menu Item' : activeTab === 'grocery' ? 'Grocery' : 'Workshop'} Images
            </h3>

            <div className="border-3 border-dashed border-maaviiTeal rounded-xl p-12 text-center hover:bg-maaviiTeal/5 transition-colors cursor-pointer group">
              <label className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-maaviiTeal/10 rounded-full group-hover:bg-maaviiTeal/20 transition-colors">
                    <Upload className="w-8 h-8 text-maaviiTeal" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-charcoal">Drop images here or click to upload</p>
                    <p className="text-sm text-charcoal/60">PNG, JPG up to 10MB</p>
                  </div>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-black text-charcoal mb-6 uppercase">Recent Uploads</h3>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {uploadedFiles.length === 0 ? (
                <div className="text-center py-12 text-charcoal/40 font-serif">
                  No files uploaded yet
                </div>
              ) : (
                uploadedFiles.map(file => (
                  <div key={file.id} className="flex items-center justify-between p-4 bg-cream rounded-lg border-2 border-charcoal/5 hover:border-maaviiOrange transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-maaviiYellow/20 rounded-lg">
                        <FileImage className="w-6 h-6 text-maaviiYellow" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">{file.name}</p>
                        <p className="text-sm text-charcoal/60">{file.type} • {file.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-cream rounded-lg transition-colors text-charcoal/60 hover:text-charcoal">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(file.id)}
                        className="p-2 hover:bg-deepRed/10 rounded-lg transition-colors text-charcoal/60 hover:text-deepRed"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="p-6 bg-maaviiTeal/10 rounded-xl border-2 border-maaviiTeal">
            <h4 className="font-black text-charcoal mb-3">Image Guidelines</h4>
            <ul className="space-y-2 text-sm text-charcoal/70 font-serif">
              <li>✓ Use high-resolution images (1200x800px minimum)</li>
              <li>✓ Format: JPG for photos, PNG for graphics</li>
              <li>✓ Keep file size under 5MB</li>
              <li>✓ Include descriptive filenames</li>
              <li>✓ Ensure good lighting and composition</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl border-3 border-charcoal/5">
            <h3 className="text-2xl font-black text-charcoal mb-6">Menu Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g., Grilled Meat Skewers"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Description</label>
                <textarea
                  placeholder="Describe the dish..."
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none h-24 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Price (₩)</label>
                <input
                  type="number"
                  placeholder="12000"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none"
                />
              </div>
              <button className="w-full px-6 py-3 bg-charcoal text-cream rounded-lg font-bold hover:bg-maaviiOrange transition-colors">
                Add Menu Item
              </button>
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border-3 border-charcoal/5">
            <h3 className="text-2xl font-black text-charcoal mb-6">Grocery Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g., Nigerian Palm Oil"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-2">Origin</label>
                  <input
                    type="text"
                    placeholder="Nigeria"
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-2">Price (₩)</label>
                  <input
                    type="number"
                    placeholder="12000"
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg font-serif focus:border-maaviiTeal outline-none"
                  />
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-charcoal text-cream rounded-lg font-bold hover:bg-maaviiOrange transition-colors">
                Add Grocery Item
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminPanel;
