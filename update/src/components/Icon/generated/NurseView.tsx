import React from 'react'

const SvgNurseView = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M8.072 16c.123.758.269 1.296.603 2h-.671c-2.645 0-3.98.667-4.004 2h6.092c1.28 1.21 2.725 1.837 4.508 2H4c-1.333 0-2-.667-2-2 .045-2.667 2.07-4 6.072-4zM15 10a5 5 0 014.178 7.747l.095.096 2.483 2.492c.393.447.243 1.013-.087 1.342-.33.328-.896.469-1.316.054l-.044-.043-2.532-2.53A5 5 0 1115 10zm0 2a3 3 0 100 6 3 3 0 000-6zM11.998 2c1.76 0 3.522.258 5.284.775a1 1 0 01.718.96V8.68a7.076 7.076 0 00-2-.619V4.52A15.84 15.84 0 0012 4a15.85 15.85 0 00-4 .52v3.978c2.972-.792 5.81-.397 5.81-.397-1.875.302-3.25 1.393-3.81 2.003 0 0-.61.064-.992.147.004.349.197.828.197.828-.692 1-.985 2.167-.985 2.167-.757-.856-1.122-1.943-1.168-2.529l-.005-.117A.989.989 0 016 9.613V3.734a1 1 0 01.718-.96A18.654 18.654 0 0111.998 2zm.502 2.5v1.002l1.004.002v.998H12.5V7.5h-1v-.998h-1.002v-.998H11.5V4.5h1z'
    />
  </svg>
)

export default SvgNurseView
