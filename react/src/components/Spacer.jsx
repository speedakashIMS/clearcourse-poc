const Spacer = ({
  mode = 'preset', // 'preset' | 'number'
  height,
  presetDesktop = 'sm', // xs | sm | md | lg | xl
  presetMobile = 'sm', // xs | sm | md | lg | xl
  className = '',
  ...props
}) => {
  const presetClassMap = {
    xs: 'h-10',
    sm: 'h-20',
    md: 'h-32',
    lg: 'h-48',
    xl: 'h-60',
  };
  const presetClassMapLg = {
    xs: 'lg:h-10',
    sm: 'lg:h-20',
    md: 'lg:h-32',
    lg: 'lg:h-48',
    xl: 'lg:h-60',
  };

  if (mode === 'number') {
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;
    return (
      <div
        className={`w-full ${className}`}
        style={{ height: resolvedHeight }}
        {...props}
      />
    );
  }

  const mobileClass = presetClassMap[presetMobile] || presetClassMap.sm;
  const desktopClass = presetClassMapLg[presetDesktop] || presetClassMapLg.sm;

  return <div className={`w-full ${mobileClass} ${desktopClass} ${className}`} {...props} />;
};

export default Spacer;

