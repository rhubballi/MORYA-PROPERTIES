import React, { useState } from 'react';
import { 
  Plus, Edit, Trash2, Eye, Search, Filter, 
  CheckCircle2, X, Image as ImageIcon, MapPin, IndianRupee 
} from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { Property, ListingType, PropertyType, PropertyCategoryType } from '../../types';

export const AdminProperties: React.FC = () => {
  const { properties, addProperty, updateProperty, deleteProperty } = useProperties();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listingType, setListingType] = useState<ListingType>('sale');
  const [propertyType, setPropertyType] = useState<PropertyType>('Apartment');
  const [category, setCategory] = useState<PropertyCategoryType>('residential');
  const [price, setPrice] = useState<number>(6500000);
  const [priceDisplay, setPriceDisplay] = useState('₹ 65 Lakh');
  const [priceNegotiable, setPriceNegotiable] = useState(true);
  const [carpetArea, setCarpetArea] = useState<number>(850);
  const [superBuiltupArea, setSuperBuiltupArea] = useState<number>(1100);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [balconies, setBalconies] = useState<number>(1);
  const [furnishing, setFurnishing] = useState<'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished'>('Semi-Furnished');
  const [facing, setFacing] = useState('East');
  const [floor, setFloor] = useState('3rd of 7 Floors');
  const [possessionStatus, setPossessionStatus] = useState<'Ready to Move' | 'Under Construction' | 'Immediate'>('Ready to Move');
  const [location, setLocation] = useState('Dhankawadi');
  const [address, setAddress] = useState('Near Panchvati Society, Dhankawadi, Pune');
  const [landmark, setLandmark] = useState('Teen Hatti Chowk');
  const [city] = useState('Pune');
  const [featured, setFeatured] = useState(false);
  const [isSampleListing, setIsSampleListing] = useState(false);
  const [status, setStatus] = useState<'active' | 'under_negotiation' | 'sold' | 'rented'>('active');
  const [featuredImage, setFeaturedImage] = useState('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80');
  const [amenitiesInput, setAmenitiesInput] = useState('Lift, Covered Parking, CCTV, 24/7 Water');

  const openAddModal = () => {
    setEditingPropertyId(null);
    setTitle('');
    setDescription('');
    setListingType('sale');
    setPropertyType('Apartment');
    setCategory('residential');
    setPrice(6500000);
    setPriceDisplay('₹ 65 Lakh');
    setPriceNegotiable(true);
    setCarpetArea(850);
    setSuperBuiltupArea(1100);
    setBedrooms(2);
    setBathrooms(2);
    setBalconies(1);
    setFurnishing('Semi-Furnished');
    setFacing('East');
    setFloor('3rd of 7 Floors');
    setPossessionStatus('Ready to Move');
    setLocation('Dhankawadi');
    setAddress('Near Panchvati Society, Dhankawadi, Pune');
    setLandmark('Teen Hatti Chowk');
    setFeatured(false);
    setIsSampleListing(false);
    setStatus('active');
    setFeaturedImage('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80');
    setAmenitiesInput('Lift, Covered Parking, CCTV, 24/7 Water');
    setIsModalOpen(true);
  };

  const openEditModal = (p: Property) => {
    setEditingPropertyId(p.id);
    setTitle(p.title);
    setDescription(p.description);
    setListingType(p.listingType);
    setPropertyType(p.propertyType);
    setCategory(p.category);
    setPrice(p.price);
    setPriceDisplay(p.priceDisplay);
    setPriceNegotiable(Boolean(p.priceNegotiable));
    setCarpetArea(p.carpetArea);
    setSuperBuiltupArea(p.superBuiltupArea || 0);
    setBedrooms(p.bedrooms || 0);
    setBathrooms(p.bathrooms || 0);
    setBalconies(p.balconies || 0);
    setFurnishing(p.furnishing);
    setFacing(p.facing || 'East');
    setFloor(p.floor || '');
    setPossessionStatus(p.possessionStatus);
    setLocation(p.location);
    setAddress(p.address);
    setLandmark(p.landmark || '');
    setFeatured(p.featured);
    setIsSampleListing(p.isSampleListing);
    setStatus(p.status);
    setFeaturedImage(p.featuredImage);
    setAmenitiesInput(p.amenities.join(', '));
    setIsModalOpen(true);
  };

  const handleSaveProperty = async (e: React.FormEvent) => {
    e.preventDefault();

    const amenitiesList = amenitiesInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    if (editingPropertyId) {
      await updateProperty(editingPropertyId, {
        title,
        slug,
        description,
        listingType,
        propertyType,
        category,
        price: Number(price),
        priceDisplay,
        priceNegotiable,
        carpetArea: Number(carpetArea),
        superBuiltupArea: Number(superBuiltupArea),
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        balconies: Number(balconies),
        furnishing,
        facing,
        floor,
        possessionStatus,
        location,
        address,
        landmark,
        featured,
        isSampleListing,
        status,
        featuredImage,
        amenities: amenitiesList,
      });
    } else {
      await addProperty({
        title,
        slug,
        description,
        listingType,
        propertyType,
        category,
        price: Number(price),
        priceDisplay,
        priceNegotiable,
        carpetArea: Number(carpetArea),
        superBuiltupArea: Number(superBuiltupArea),
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        balconies: Number(balconies),
        furnishing,
        facing,
        floor,
        possessionStatus,
        location,
        address,
        landmark,
        city,
        featured,
        isSampleListing,
        status,
        featuredImage,
        images: [featuredImage],
        amenities: amenitiesList,
      });
    }

    setIsModalOpen(false);
  };

  const handleDelete = async (id: string, propTitle: string) => {
    if (confirm(`Are you sure you want to delete "${propTitle}"?`)) {
      await deleteProperty(id);
    }
  };

  // Filter listings
  const filtered = properties.filter(p => {
    const q = searchTerm.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    if (!matchSearch) return false;
    if (filterType !== 'all' && p.listingType !== filterType) return false;
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-950">
            Property Listings Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage real estate inventory, pricing, availability, and representative showcases.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Property</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium focus:outline-none"
          >
            <option value="all">All Types (Sale & Rent)</option>
            <option value="sale">For Sale Only</option>
            <option value="rent">For Rent Only</option>
          </select>
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-5 py-3">Property</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Area</th>
                <th className="px-5 py-3">Location</th>
                <th className="px-5 py-3">Tag / Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.featuredImage}
                        alt={p.title}
                        className="w-12 h-10 object-cover rounded-lg flex-shrink-0 bg-slate-100"
                      />
                      <div className="max-w-xs">
                        <span className="font-bold text-navy-950 block truncate">{p.title}</span>
                        <span className="text-[11px] text-slate-500">{p.propertyType} • {p.bedrooms ? `${p.bedrooms} BHK` : p.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      p.listingType === 'sale' ? 'bg-navy-100 text-navy-900' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {p.listingType}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-bold text-slate-900">
                    {p.priceDisplay}
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">
                    {p.carpetArea} sq.ft
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">
                    {p.location}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-col gap-1 items-start">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize ${
                        p.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {p.status}
                      </span>
                      {p.isSampleListing && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-100 text-amber-900 font-medium">
                          Showcase Demo
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(p)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
                        title="Edit Property"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id, p.title)}
                        className="p-1.5 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                        title="Delete Property"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Property Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-navy-900 px-6 py-4 text-white flex justify-between items-center border-b border-navy-800">
              <h3 className="font-serif text-lg font-bold">
                {editingPropertyId ? 'Edit Property Listing' : 'Add New Property Listing'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProperty} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Listing Type *</label>
                  <select
                    value={listingType}
                    onChange={(e) => setListingType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land / Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Property Type *</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Row House">Row House</option>
                    <option value="Shop">Shop</option>
                    <option value="Office Space">Office Space</option>
                    <option value="Plot">Plot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Price (Numeric INR) *</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Price Display String *</label>
                  <input
                    type="text"
                    value={priceDisplay}
                    onChange={(e) => setPriceDisplay(e.target.value)}
                    placeholder="e.g. ₹ 68 Lakh or ₹ 25,000 / mo"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Carpet Area (sq.ft) *</label>
                  <input
                    type="number"
                    value={carpetArea}
                    onChange={(e) => setCarpetArea(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Bedrooms (BHK)</label>
                  <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Possession Status</label>
                  <select
                    value={possessionStatus}
                    onChange={(e) => setPossessionStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Ready to Move">Ready to Move</option>
                    <option value="Under Construction">Under Construction</option>
                    <option value="Immediate">Immediate</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Pune Locality *</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Address / Society</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Featured Image URL</label>
                <input
                  type="url"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Amenities (Comma separated)</label>
                <input
                  type="text"
                  value={amenitiesInput}
                  onChange={(e) => setAmenitiesInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                  required
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="rounded accent-gold-500"
                  />
                  <span className="font-semibold text-slate-700">Feature on Homepage</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSampleListing}
                    onChange={(e) => setIsSampleListing(e.target.checked)}
                    className="rounded accent-amber-500"
                  />
                  <span className="font-semibold text-amber-900">Mark as Representative Showcase (Demo)</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-gold px-6 py-2 rounded-xl font-bold uppercase tracking-wider"
                >
                  {editingPropertyId ? 'Update Listing' : 'Publish Property'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
