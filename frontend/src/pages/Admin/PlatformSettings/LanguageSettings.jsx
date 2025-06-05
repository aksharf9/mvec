import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/PlatformSettings.css';

const allLanguages = ['English', 'Arabic', 'Hindi', 'French', 'Spanish'];

const LanguageSettings = () => {
  const [defaultLang, setDefaultLang] = useState('English');
  const [enabledLangs, setEnabledLangs] = useState(['English', 'Arabic']);

  const toggleLang = (lang) => {
    setEnabledLangs((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSave = () => {
    console.log('Saving language settings:', { defaultLang, enabledLangs });
    alert('Language settings saved (mock)');
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Language Settings</h2>

        <div className="mt-4">
          <label className="form-label">Default Language</label>
          <select
            className="form-select"
            value={defaultLang}
            onChange={(e) => setDefaultLang(e.target.value)}
          >
            {allLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="form-label">Enabled Languages</label>
          <div className="row">
            {allLanguages.map((lang) => (
              <div key={lang} className="col-md-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={enabledLangs.includes(lang)}
                  onChange={() => toggleLang(lang)}
                  id={`lang-${lang}`}
                />
                <label className="form-check-label" htmlFor={`lang-${lang}`}>
                  {lang}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSave}>
          Save Language Settings
        </button>
      </div>
    </div>
  );
};

export default LanguageSettings;
