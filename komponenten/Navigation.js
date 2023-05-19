import Link from 'next/link'
import Image from 'next/image'
import {Badge} from 'react-bootstrap'

export default function Navigation() {
    return (
      <div className="shadow sticky-top p-2 mb-2 bg-danger">
        <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
                <div>
                    <Image src={'/bilder/logo.png'} alt='logo' width={180} height={75}/>
                </div>
            </Link>
            <Link href="/warenkorb">
                <div>
                    <Image src={'/bilder/warenkorb.png'} alt='warenkorb' width={30} height={30}/>
                    <Badge pill bg="success">2</Badge>
                </div>
            </Link>
        </div>
      </div>
    )
  }
  