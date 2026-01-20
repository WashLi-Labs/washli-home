import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { X } from 'lucide-react';

interface Location {
    lat: number;
    lng: number;
}

interface LocationPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectLocation: (location: Location) => void;
    initialLocation?: Location;
}

const containerStyle = {
    width: '100%',
    height: '400px'
};

const defaultCenter = {
    lat: 6.9271,
    lng: 79.8612
}; // Colombo, Sri Lanka

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

export const LocationPickerModal: React.FC<LocationPickerModalProps> = ({ isOpen, onClose, onSelectLocation, initialLocation }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [markerPosition, setMarkerPosition] = useState<Location>(defaultCenter);

    useEffect(() => {
        if (initialLocation) {
            setMarkerPosition(initialLocation);
        }
    }, [initialLocation]);

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);

    const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            setMarkerPosition({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            });
        }
    }, []);

    const onMarkerDragEnd = useCallback((e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            setMarkerPosition({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            });
        }
    }, []);

    const handleSave = () => {
        onSelectLocation(markerPosition);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Pick Your Location</h3>
                        <p className="text-sm text-slate-500 mt-1">
                            Your outlet's location will be displayed on the map. Drag the pin to adjust.
                        </p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Map Container */}
                <div className="relative bg-slate-50">
                    {loadError ? (
                        <div className="h-[400px] flex flex-col items-center justify-center p-6 text-center text-red-500 bg-red-50">
                            <span className="font-semibold mb-2">Error Loading Map</span>
                            <span className="text-sm">{loadError.message}</span>
                            <span className="text-xs text-slate-500 mt-4">
                                Error Type: {loadError.name} <br/>
                                Check your API Key and Google Cloud Project Console.
                            </span>
                        </div>
                    ) : isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={markerPosition}
                            zoom={13}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            onClick={onMapClick}
                            options={{
                                streetViewControl: false,
                                mapTypeControl: true,
                                fullscreenControl: true,
                            }}
                        >
                            <Marker
                                position={markerPosition}
                                draggable={true}
                                onDragEnd={onMarkerDragEnd}
                                animation={google.maps.Animation.DROP}
                            />
                        </GoogleMap>
                    ) : (
                        <div className="h-[400px] flex items-center justify-center text-slate-400">
                            Loading Map...
                        </div>
                    )}
                </div>

                {/* Footer / Controls */}
                <div className="p-6 bg-white border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Lat.:</label>
                            <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-mono text-sm">
                                {markerPosition.lat.toFixed(6)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Long.:</label>
                            <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-mono text-sm">
                                {markerPosition.lng.toFixed(6)}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors shadow-sm hover:shadow active:scale-[0.98] transform"
                    >
                        Save Location
                    </button>
                </div>
            </div>
        </div>
    );
};
