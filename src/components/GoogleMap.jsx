const GoogleMap = () => {
  return (
    <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687495985263!2d-122.42067948468536!3d37.77851997975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df72fd5f%3A0x2ecb097edbd3946!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1694282145130!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
