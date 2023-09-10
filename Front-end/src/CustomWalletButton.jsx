import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const CustomWalletButton = ({ onClick }) => {
    return (
        <div id="button" className="flex items-center justify-center float-left">
            <button 
                onClick={onClick} 
                className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-bl border-blue-400 text-gray-200 font-antonio p-2 py-6 rounded-lg h-[15%] mr-10">
                Connect to Phantom 
                <img src="src/img/ghost.png" alt="phantom-logo" className="w-9 ml-2 md:invisible" />
            </button>
        </div>
    );
}
