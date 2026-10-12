
import { useEffect, useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Save,
  Settings,
} from "lucide-react";

const defaultProfile = {
  name: "Guest Customer",
  email: "guest@example.com",
  phone: "",
  city: "",
};

function Profile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("shopsphere-profile");

      if (stored) {
        const parsed = JSON.parse(stored);

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          setProfile({
            ...defaultProfile,
            ...parsed,
          });
        }
      }
    } catch {
      // Keep the default profile if stored data is invalid.
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      localStorage.setItem(
        "shopsphere-profile",
        JSON.stringify(profile)
      );
      setSaved(true);
    } catch {
      setSaved(false);
      window.alert("Unable to save profile. Check browser storage settings.");
    }
  }

  return (
    <div className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">YOUR PERSONAL SPACE</span>
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>
      </section>

      <section className="container profile-layout section">
        <aside className="profile-sidebar">
          <div className="avatar">
            <UserRound size={45} />
          </div>

          <h2>{profile.name || "Guest Customer"}</h2>
          <p>{profile.email || "No email added"}</p>

          <span className="profile-badge">Demo account</span>

          <div className="profile-sidebar-note">
            <Settings size={20} />
            <p>
              This is a local demonstration profile. No account or
              password authentication is configured.
            </p>
          </div>
        </aside>

        <form className="profile-form" onSubmit={handleSubmit}>
          <h2>Personal information</h2>
          <p>Update your details and save them in this browser.</p>

          {saved && (
            <div className="success-message" role="status">
              Profile saved successfully!
            </div>
          )}

          <div className="form-group">
            <label htmlFor="profile-name">
              <UserRound size={16} /> Full name
            </label>
            <input
              id="profile-name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              minLength={2}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profile-email">
              <Mail size={16} /> Email address
            </label>
            <input
              id="profile-email"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profile-phone">
              <Phone size={16} /> Phone number
            </label>
            <input
              id="profile-phone"
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="profile-city">
              <MapPin size={16} /> City
            </label>
            <input
              id="profile-city"
              name="city"
              value={profile.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            <Save size={17} /> Save Profile
          </button>
        </form>
      </section>
    </div>
  );
}

export default Profile;
