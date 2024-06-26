import 'boxicons'

const Footer = () => {
  return (
    <div className="mt-16">
        <div className='flex flex-row align-middle justify-center m-2 '>
            <a className='mx-2 ' href=""><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a className='mx-2 ' href=""><box-icon type='logo' name='meta'></box-icon></a>
            <a className='mx-2 ' href=""><box-icon type='logo' name='instagram'></box-icon></a>
            <a className='mx-2 ' href=""><box-icon name='envelope' type='solid' ></box-icon></a>
        </div>

        <div className="flex flex-row justify-center align-middle">@2024 all rights are reserved  </div>
    </div>
  )
}

export default Footer