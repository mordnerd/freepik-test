export const NavBar = () => {
  return (
    <div className="flex justify-between pl-4 gap-8 space-y-1.5 pt-4 text-white">
      <ol className="flex gap-4 space-y-1.5 items-center">
        <li className="text-2xl font-bold p-1"><button>FREEPIK</button></li>
        <li><button>Tools</button></li>
        <li><button>Images</button></li>
        <li><button>Icons</button></li>
        <li><button>Videos</button></li>
        <li><button>Templates</button></li>
        <li><button>PSD</button></li>
        <li><button>Mockups</button></li>
        <li><button>More</button></li>
      </ol>

      <ol className="flex pr-6 gap-6 items-center">
        <li><button>Pricing</button></li>
        <li><button className="border px-3 py-1 rounded">Sign-in</button></li>
      </ol>

    </div>
  )
}