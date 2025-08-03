// Avatar Forge – React + Tailwind (ChatGPT Images API)
// ----------------------------------------------------
// Self‑contained React component that replicates the previous
// HTML/JS prototype. Import and render <AvatarForge /> anywhere in
// your React app. TailwindCSS should already be configured globally
// (e.g. via PostCSS or CDN in index.html).

import React, { setState, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Avatar from './Avatar';

// ================= COMPONENTS =============================
export default function AvatarForge() {
  useEffect(() => {
    //run this after render
    // setCodemate(str);
    // console.log(selections);
    saveCodemate();
  });

  const [color, setColor] = useState('#FF0000');
  // ================= CATALOG =============================
  let catalog = {
    'Skin Tone': [
      {
        name: 'Light',
        group: 'skin-light',
        prompt: 'asian (light) skintone',
        color: '#FCD7B8',
      },
      {
        name: 'Medium',
        group: 'skin-medium',
        prompt: 'caucasian skintone',
        color: '#E0B394',
      },
      {
        name: 'Olive',
        group: 'skin-olive',
        prompt: 'hispanic (olive) skintone',
        color: '#C68642',
      },
      {
        name: 'Brown',
        group: 'skin-brown',
        prompt: 'african american skintone',
        color: '#8D5524',
      },
      {
        name: 'Dark',
        group: 'skin-dark',
        prompt: 'african (black) skintone',
        color: '#5B3C24',
      },
      {
        name: 'Purple',
        group: 'skin-purple',
        prompt: 'purple skintone',
        color: '#A020F0',
      },
      {
        name: 'Green',
        group: 'skin-green',
        prompt: 'green skintone',
        color: '#00FF00',
      },
      {
        name: 'Custom',
        group: 'skin-custom',
        prompt: 'skintone',
        color: color,
      },
    ],
    'Hair & Headwear': [
      { name: 'None', group: 'hair-none', prompt: 'bald' },
      {
        name: 'Baseball Cap',
        group: 'hair-baseball-cap',
        prompt: 'blue baseball hat',
      },
      { name: 'Hijab', group: 'hair-headwear-hijab', prompt: 'hijab' },
      { name: 'Shag', group: 'hair-shag', prompt: 'shag hair' },
      {
        name: 'Short Dreads',
        group: 'hair-short-dreads',
        prompt: 'short dreadlocs',
      },
      { name: 'Short', group: 'hair-short', prompt: 'short straight hair' },
      { name: 'Curly', group: 'hair-curly', prompt: 'curly hair' },
      { name: 'Afro', group: 'hair-afro', prompt: 'afro hair' },
    ],
    Eyes: [
      { name: 'Happy', group: 'eyes-happy', prompt: 'happy eyes' },
      { name: 'Surprised', group: 'eyes-surprised', prompt: 'surprised eyes' },
      { name: 'Relaxed', group: 'eyes-relaxed', prompt: 'relaxed eyes' },
      { name: 'Wink', group: 'eyes-wink', prompt: 'winking' },
    ],
    Mouth: [
      { name: 'Grin', group: 'mouth-grin', prompt: 'smiling' },
      { name: 'Smile', group: 'mouth-smile', prompt: 'closed mouth' },
      { name: 'Surprise', group: 'mouth-surprise', prompt: 'surprised' },
    ],
    Glasses: [
      { name: 'None', group: 'glasses-none', prompt: 'no glasses' },
      { name: 'Round', group: 'glasses-round', prompt: 'round glasses' },
      { name: 'Square', group: 'glasses-square', prompt: 'square glasses' },
    ],
    Accessories: [
      { name: 'None', group: 'assist-none', prompt: '' },
      { name: 'Hearing Aid', group: 'assist-hearing', prompt: 'hearing aid' },
    ],
    'Facial Hair': [
      { name: 'None', group: 'facial-none', prompt: 'no facial hair' },
      { name: 'Mustache', group: 'facial-mustache', prompt: 'mustache' },
      { name: 'Beard', group: 'facial-beard', prompt: 'full beard' },
    ],
    // "Assistive Tech": [
    //   { name: "None", group: "assist-none", prompt: "" },
    //   { name: "Hearing Aid", group: "assist-hearing", prompt: "hearing aid" }
    // ],
    Clothing: [
      {
        name: 'Turtleneck',
        group: 'cloth-turtleneck',
        prompt: 'red turtleneck',
      },
    ],
    Pronouns: [
      { name: 'She/Her', group: 'she', prompt: 'she' },
      { name: 'He/Him', group: 'he', prompt: 'he' },
      { name: 'They/Them', group: 'they', prompt: 'they' },
    ],
  };
  // ================= HELPERS =============================
  const categories = Object.keys(catalog);

  function buildPrompt(selections) {
    const parts = categories
      .map(
        (c) => catalog[c].find((o) => o.group === selections[c].group).prompt
      )
      .filter(Boolean);
    return `cartoon avatar, ${parts.join(
      ', '
    )}, flat vector style, isolated single person portrait, avatar style, circle cropped, full-bleed`;
  }

  function randomizeSelections() {
    const out = {};
    categories.forEach((cat) => {
      const opts = catalog[cat];
      out[cat] = opts[Math.floor(Math.random() * opts.length)];
    });
    return out;
  }
  let navigate = useNavigate();
  // ----- state -----

  const [selections, setSelections] = useState((e) => {
    let init = {};
    categories.forEach((cat) => {
      init[cat] = catalog[cat][0];
    });
    return init;
  });
  const [loading, setLoading] = useState(false);
  const [aiUrl, setAiUrl] = useState('');
  const [apiKey, setApiKey] = useState(
    () => sessionStorage.getItem('OPENAI_API_KEY') || ''
  );
  const [showModal, setShowModal] = useState(false);

  // ----- handlers -----
  const handleSelect = (cat, option) => {
    setSelections((prev) => ({ ...prev, [cat]: option }));
    // console.log(selections);
    saveCodemate();
    setAiUrl('');
  };

  const handleColorChange = (hexColor) => {
    const customSkinTone = {
      name: 'Custom',
      group: 'skin-custom',
      prompt: 'skintone ' + hexColor,
      color: hexColor,
    };
    setSelections((prev) => ({ ...prev, 'Skin Tone': customSkinTone }));
    saveCodemate();
    setAiUrl('');
  };
  const saveCodemate = () => {
    var s = new XMLSerializer();
    var str = s.serializeToString(document.getElementById('codemate'));
    localStorage.setItem('codemate', str);
  };

  const handleRandomize = () => {
    setSelections(randomizeSelections());
    setAiUrl('');
  };
  const [currentCat, setCurrentCat] = useState(() => {
    setSelections(randomizeSelections());
    return categories[0];
  });
  const handleGenerate = async () => {
    if (!apiKey) {
      // setShowModal(true);
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: buildPrompt(selections),
          n: 1,
          size: '1024x1024',
        }),
      });
      const data = await resp.json();
      if (data.error) throw new Error(data.error.message);
      setAiUrl(data.data[0].url);
      localStorage.setItem('avatarUrl', data.data[0].url);
    } catch (err) {
      alert('Image generation failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveKey = () => {
    if (apiKey.startsWith('sk-')) {
      sessionStorage.setItem('OPENAI_API_KEY', apiKey);
      setShowModal(false);
    } else {
      alert('Please enter a valid key starting with sk-');
    }
  };
  const avatarId = Math.floor(Math.random() * 100);
  // ----- render helpers -----
  const renderNav = () => (
    <nav className="space-y-2 text-sm">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`block w-full text-left px-3 py-2 rounded-lg ${
            currentCat === cat
              ? 'bg-indigo-100 font-medium'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setCurrentCat(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
  const avatarStyles = {
    background: 'gray',
  };

  const renderOptions = () => {
    if (currentCat === 'Skin Tone') {
      return (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl">
            {catalog[currentCat].map((opt) => (
              <button
                key={opt.group}
                onClick={() => handleSelect(currentCat, opt)}
                className={`flex flex-col items-center justify-center border rounded-lg p-2 text-xs space-y-1 ${
                  selections[currentCat].group === opt.group
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: opt.color }}
                ></div>
                <span>{opt.name}</span>
                {opt.name === "Custom" &&
                <input
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                  handleColorChange(e.target.value);
                }}
                className="rounded-lg cursor-pointer h-16 w-16 rounded-xl"
              />
              }
              </button>
            ))}
            
          </div>
        </>
      );
    }

    return (
      <>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl">
          {catalog[currentCat].map((opt) => (
            <button
              key={opt.group}
              onClick={() => handleSelect(currentCat, opt)}
              className={`flex flex-col items-center justify-center border rounded-lg p-2 text-xs space-y-1 ${
                selections[currentCat].group === opt.group
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span>{opt.name}</span>
            </button>
          ))}
        </div>
      </>
    );
  };

  // SVG layer visibility helper
  const isVisible = (group) =>
    Object.values(selections).some((sel) => {
      // console.log(group);
      // if(group === 'skin-custom'){
      //   console.log(sel.group, group);
      // }

      return sel.group === group;
    });

  return (
    <>
      <title>Pick your CodeMate</title>
      {/* HEADER */}
      <Header title="Pick your CodeMate" resetSvg={true}>
        <p>
          Your CodeMate is your companion through your learning journey, you can
          decide to share them with your classmates as you work on group
          projects
        </p>
      </Header>

      {/* BODY */}
      
      <main className="flex flex-1">
        {/* CATEGORY NAV */}
        <aside className="border-r border-gray-400 flex flex-col w-56 bg-white p-4 overflow-y-auto">
          <div className="grow-1 flex">{renderNav()}</div>
        </aside>

        {/* WORKSPACE */}
        <section className="flex-1 pb-40 flex flex-col items-center justify-top p-6 space-y-6 overflow-y-auto">
          {/* AVATAR PREVIEW */}
          <div
            className="relative w-64 h-64 select-none rounded-full"
            style={avatarStyles}
          >
            <Avatar catalog={catalog} isVisible={isVisible} />

            {/* AI IMAGE OVERLAY */}
            {aiUrl && (
              <img
                src={aiUrl}
                alt="AI Avatar"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* PRONOUN TAG */}
            <div className="absolute -right-3 -bottom-3 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
              {selections['Pronouns'].name}
            </div>
            {/* LOADER */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-full">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
              </div>
            )}
          </div>
          {/* OPTIONS */}
          {renderOptions()}
        </section>

        {/* LAYER STACK */}
        <aside className="bg-gray-50 w-64 rounded-xl my-10 border-l border-gray-200 p-4 overflow-y-auto">
          <h2 className="text-lg font-medium mb-4">Selected Layers</h2>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                {cat}: {selections[cat].name}
              </li>
            ))}
          </ul>
          <div className="py-5">
            <button
              onClick={handleRandomize}
              className="flex-none flex px-4 py-2 bg-gray-200 rounded-xl shadow text-sm"
            >
              Randomize
            </button>
          </div>
        </aside>
      </main>

      {/* FOOTER ACTIONS */}
      <Footer>
        <>
          <div className="space-x-2">
            {/* <button onClick={handleGenerate} className="px-4 py-2 bg-amber-500 text-white rounded-xl shadow text-sm">Generate AI Image</button> */}
          </div>
          <div className="space-x-2">
            {/* <button className="px-4 py-2 bg-gray-200 rounded-xl text-sm" disabled>Back</button> */}
            <button
              className="px-8 py-4 text-white rounded-xl shadow bg-code-purple"
              onClick={() => navigate('/styles-intro')}
            >
              Next
            </button>
          </div>
        </>
      </Footer>

      {/* API KEY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
            <h2 className="text-lg font-semibold mb-3">OpenAI API Key</h2>
            <p className="text-sm text-gray-600 mb-3">
              Enter your secret key to enable AI image generation.
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full border rounded-lg px-3 py-2 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-2 text-sm bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveKey}
                className="px-3 py-2 text-sm bg-code-purple text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
