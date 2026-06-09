import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ArrowLeftIcon, ClipboardIcon, CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as MiniIcons from '@heroicons/react/20/solid';

// Array of icon names in kebab-case
const iconNames = [
  'academic-cap',
  'adjustments-horizontal',
  'adjustments-vertical',
  'archive-box',
  'archive-box-arrow-down',
  'archive-box-x-mark',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-on-square',
  'arrow-down-on-square-stack',
  'arrow-down-right',
  'arrow-down-tray',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-end-on-rectangle',
  'arrow-left-start-on-rectangle',
  'arrow-long-down',
  'arrow-long-left',
  'arrow-long-right',
  'arrow-long-up',
  'arrow-path',
  'arrow-path-rounded-square',
  'arrow-right',
  'arrow-right-circle',
  'arrow-right-end-on-rectangle',
  'arrow-right-start-on-rectangle',
  'arrow-top-right-on-square',
  'arrow-trending-down',
  'arrow-trending-up',
  'arrow-turn-down-left',
  'arrow-turn-down-right',
  'arrow-turn-left-down',
  'arrow-turn-left-up',
  'arrow-turn-right-down',
  'arrow-turn-right-up',
  'arrow-turn-up-left',
  'arrow-turn-up-right',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-on-square',
  'arrow-up-on-square-stack',
  'arrow-up-right',
  'arrow-up-tray',
  'arrow-uturn-down',
  'arrow-uturn-left',
  'arrow-uturn-right',
  'arrow-uturn-up',
  'arrows-pointing-in',
  'arrows-pointing-out',
  'arrows-right-left',
  'arrows-up-down',
  'at-symbol',
  'backspace',
  'backward',
  'banknotes',
  'bars-2',
  'bars-3',
  'bars-3-bottom-left',
  'bars-3-bottom-right',
  'bars-3-center-left',
  'bars-4',
  'bars-arrow-down',
  'bars-arrow-up',
  'battery-0',
  'battery-100',
  'battery-50',
  'beaker',
  'bell',
  'bell-alert',
  'bell-slash',
  'bell-snooze',
  'bold',
  'bolt',
  'bolt-slash',
  'book-open',
  'bookmark',
  'bookmark-slash',
  'bookmark-square',
  'briefcase',
  'bug-ant',
  'building-library',
  'building-office',
  'building-office-2',
  'building-storefront',
  'cake',
  'calculator',
  'calendar',
  'calendar-date-range',
  'calendar-days',
  'camera',
  'chart-bar',
  'chart-bar-square',
  'chart-pie',
  'chat-bubble-bottom-center',
  'chat-bubble-bottom-center-text',
  'chat-bubble-left',
  'chat-bubble-left-ellipsis',
  'chat-bubble-left-right',
  'chat-bubble-oval-left',
  'chat-bubble-oval-left-ellipsis',
  'check',
  'check-badge',
  'check-circle',
  'chevron-double-down',
  'chevron-double-left',
  'chevron-double-right',
  'chevron-double-up',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-up-down',
  'circle-stack',
  'clipboard',
  'clipboard-document',
  'clipboard-document-check',
  'clipboard-document-list',
  'clock',
  'cloud',
  'cloud-arrow-down',
  'cloud-arrow-up',
  'code-bracket',
  'code-bracket-square',
  'cog',
  'cog-6-tooth',
  'cog-8-tooth',
  'command-line',
  'computer-desktop',
  'cpu-chip',
  'credit-card',
  'cube',
  'cube-transparent',
  'currency-bangladeshi',
  'currency-dollar',
  'currency-euro',
  'currency-pound',
  'currency-rupee',
  'currency-yen',
  'cursor-arrow-rays',
  'cursor-arrow-ripple',
  'device-phone-mobile',
  'device-tablet',
  'divide',
  'document',
  'document-arrow-down',
  'document-arrow-up',
  'document-chart-bar',
  'document-check',
  'document-currency-bangladeshi',
  'document-currency-dollar',
  'document-currency-euro',
  'document-currency-pound',
  'document-currency-rupee',
  'document-currency-yen',
  'document-duplicate',
  'document-magnifying-glass',
  'document-minus',
  'document-plus',
  'document-text',
  'ellipsis-horizontal',
  'ellipsis-horizontal-circle',
  'ellipsis-vertical',
  'envelope',
  'envelope-open',
  'exclamation-circle',
  'exclamation-triangle',
  'eye',
  'eye-dropper',
  'eye-slash',
  'equals',
  'face-frown',
  'face-smile',
  'film',
  'finger-print',
  'fire',
  'flag',
  'folder',
  'folder-arrow-down',
  'folder-minus',
  'folder-open',
  'folder-plus',
  'forward',
  'funnel',
  'gif',
  'gift',
  'gift-top',
  'globe-alt',
  'globe-americas',
  'globe-asia-australia',
  'globe-europe-africa',
  'h1',
  'h2',
  'h3',
  'hand-raised',
  'hand-thumb-down',
  'hand-thumb-up',
  'hashtag',
  'heart',
  'home',
  'home-modern',
  'identification',
  'inbox',
  'inbox-arrow-down',
  'inbox-stack',
  'information-circle',
  'italic',
  'key',
  'language',
  'lifebuoy',
  'light-bulb',
  'link',
  'link-slash',
  'list-bullet',
  'lock-closed',
  'lock-open',
  'magnifying-glass',
  'magnifying-glass-circle',
  'magnifying-glass-minus',
  'magnifying-glass-plus',
  'map',
  'map-pin',
  'megaphone',
  'microphone',
  'minus',
  'minus-circle',
  'moon',
  'musical-note',
  'newspaper',
  'no-symbol',
  'numbered-list',
  'paint-brush',
  'paper-airplane',
  'paper-clip',
  'pause',
  'pause-circle',
  'pencil',
  'pencil-square',
  'percent-badge',
  'phone',
  'phone-arrow-down-left',
  'phone-arrow-up-right',
  'phone-x-mark',
  'photo',
  'play',
  'play-circle',
  'play-pause',
  'plus',
  'plus-circle',
  'power',
  'presentation-chart-bar',
  'presentation-chart-line',
  'printer',
  'puzzle-piece',
  'qr-code',
  'question-mark-circle',
  'queue-list',
  'radio',
  'receipt-percent',
  'receipt-refund',
  'rectangle-group',
  'rectangle-stack',
  'rocket-launch',
  'rss',
  'scale',
  'scissors',
  'server',
  'server-stack',
  'share',
  'shield-check',
  'shield-exclamation',
  'shopping-bag',
  'shopping-cart',
  'signal',
  'signal-slash',
  'slash',
  'sparkles',
  'speaker-wave',
  'speaker-x-mark',
  'square-2-stack',
  'squares-2x2',
  'squares-plus',
  'square-3-stack-3d',
  'star',
  'stop',
  'stop-circle',
  'strikethrough',
  'sun',
  'swatch',
  'table-cells',
  'tag',
  'ticket',
  'trash',
  'trophy',
  'truck',
  'tv',
  'underline',
  'user',
  'user-circle',
  'user-group',
  'user-minus',
  'user-plus',
  'users',
  'variable',
  'video-camera',
  'video-camera-slash',
  'view-columns',
  'viewfinder-circle',
  'wallet',
  'wifi',
  'window',
  'wrench',
  'wrench-screwdriver',
  'x-circle',
  'x-mark',
];

// Convert kebab-case to PascalCase
function kebabToPascal(kebab) {
  return kebab
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Get icon component from namespace
function getIconComponent(iconName, namespace) {
  const componentName = `${kebabToPascal(iconName)}Icon`;
  return namespace[componentName];
}

// Generate icons array dynamically
const icons = iconNames.map(name => ({
  name,
  outline: getIconComponent(name, OutlineIcons),
  solid: getIconComponent(name, SolidIcons),
  mini: getIconComponent(name, MiniIcons),
})).filter(icon => icon.outline && icon.solid && icon.mini); // Filter out any missing icons

function IconCard({ iconSet }) {
  const [copied, setCopied] = useState(false);
  const iconName = iconSet.name;
  const iconNamePascal = kebabToPascal(iconName);
  
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const OutlineIcon = iconSet.outline;
  const SolidIcon = iconSet.solid;
  const MiniIcon = iconSet.mini;

  if (!OutlineIcon || !SolidIcon || !MiniIcon) {
    return null;
  }

  return (
    <div className="bg-white rounded-20 p-16 border border-grey-200">
      <h3 className="text-body-small font-semibold text-grey-700 mb-12 capitalize">
        {iconSet.name.replace(/-/g, ' ')}
      </h3>
      <div className="flex items-center gap-10 flex-wrap mb-16">
        {/* Small Outline (16px) */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-grey-50 rounded-10 p-8 border border-grey-200">
            <OutlineIcon className="h-16 w-16 text-grey-800" />
          </div>
        </div>
        
        {/* Medium Outline (20px) */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-grey-50 rounded-10 p-8 border border-grey-200">
            <OutlineIcon className="h-20 w-20 text-grey-800" />
          </div>
        </div>
        
        {/* Large Outline (24px) */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-grey-50 rounded-10 p-8 border border-grey-200">
            <OutlineIcon className="h-24 w-24 text-grey-800" />
          </div>
        </div>
        
        {/* Solid (24px) */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-grey-50 rounded-10 p-8 border border-grey-200">
            <SolidIcon className="h-24 w-24 text-grey-800" />
          </div>
        </div>
        
        {/* Mini (20px) */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-grey-50 rounded-10 p-8 border border-grey-200">
            <MiniIcon className="h-20 w-20 text-grey-800" />
          </div>
        </div>
      </div>
      
      {/* Copy Input */}
      <div className="flex items-center gap-8">
        <input
          type="text"
          value={`${iconNamePascal}Icon`}
          readOnly
          className="flex-1 px-10 py-6 text-body-small bg-grey-50 border border-grey-200 rounded-10 text-grey-800 focus:outline-none focus:ring-2 focus:ring-grey-400"
          onClick={(e) => e.target.select()}
        />
        <button
          onClick={() => copyToClipboard(`${iconNamePascal}Icon`)}
          className="px-10 py-6 bg-grey-100 hover:bg-grey-200 border border-grey-200 rounded-10 transition-colors flex items-center gap-6"
          title="Copy icon name"
        >
          {copied ? (
            <CheckIcon className="h-16 w-16 text-grey-600" />
          ) : (
            <ClipboardIcon className="h-16 w-16 text-grey-600" />
          )}
        </button>
      </div>
    </div>
  );
}

function Icons() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter icons based on search term
  const filteredIcons = useMemo(() => {
    if (!searchTerm.trim()) {
      return icons;
    }
    
    const term = searchTerm.toLowerCase();
    return icons.filter(icon => 
      icon.name.toLowerCase().includes(term) ||
      icon.name.replace(/-/g, ' ').toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-grey-50">

      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <Link
              to="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </Link>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Icon Library</h1>
            <p className="text-body-default text-grey-600 mb-24">Browse all available icons</p>
            
            {/* Search Input */}
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-16 pointer-events-none">
                <MagnifyingGlassIcon className="h-20 w-20 text-grey-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search icons..."
                className="w-full pl-48 pr-16 py-12 text-body-default bg-white border border-grey-200 rounded-10 text-grey-800 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-40">
        {/* Results Count */}
        {searchTerm && (
          <div className="mb-24">
            <p className="text-body-default text-grey-600">
              Found {filteredIcons.length} {filteredIcons.length === 1 ? 'icon' : 'icons'} matching "{searchTerm}"
            </p>
          </div>
        )}
        
        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
            {filteredIcons.map((iconSet) => (
              <IconCard key={iconSet.name} iconSet={iconSet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-80">
            <p className="text-body-default text-grey-600">
              No icons found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Icons;

