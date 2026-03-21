import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Phone, PhoneOff, Loader2 } from 'lucide-react';

// --- VAPI CONFIGURATION ---
const VAPI_PUBLIC_KEY = 'ecd2af21-3ac1-467d-a847-d9284e6608b8'; 
const ASSISTANT_ID = '05a80668-79d9-41b8-b170-fdd7c21889b4';

const vapi = new Vapi(VAPI_PUBLIC_KEY);

const VoiceAgentButton = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    vapi.on('call-start', () => {
      setConnecting(false);
      setConnected(true);
    });

    vapi.on('call-end', () => {
      setConnecting(false);
      setConnected(false);
    });

    vapi.on('error', (error) => {
      console.error('Vapi Error:', error);
      setConnecting(false);
      setConnected(false);
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = () => {
    if (connected) {
      vapi.stop();
    } else {
      setConnecting(true);
      vapi.start(ASSISTANT_ID);
    }
  };

  return (
    <button 
      onClick={toggleCall}
      className={`voice-agent-float ${connected ? 'active' : ''}`}
      disabled={connecting}
      title={connected ? "End Call" : "Talk to an Agent (Hostel AI)"}
    >
      <div className="icon-wrapper">
        {connecting ? (
          <Loader2 className="animate-spin" size={32} />
        ) : connected ? (
          <PhoneOff size={32} />
        ) : (
          <Phone size={32} />
        )}
      </div>
      <span className="button-text">
        {connecting ? "Connecting..." : connected ? "Ending..." : "Talk to an Agent"}
      </span>
      
      {/* Visual sound wave animation when active */}
      {connected && (
        <div className="sound-waves">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </button>
  );
};

export default VoiceAgentButton;
