const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const GoogleMapComponent = ({ query }) => {
    return (
        <>
            <iframe
                width="600"
                height="450"
                style={{ border: 0, paddingTop: '1rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
                    &q=${query}`}>
            </iframe>
        </>
    );
};

export default GoogleMapComponent;