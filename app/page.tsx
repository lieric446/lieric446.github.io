export default function Home() {
  return (
    <div className="custom-container">
      <h1 className="text-4xl font-bold" >Hi! I'm Eric!</h1>
      <div className="mt-8 text-lg">
        I'm a software engineer working at Dell Technologies. I graduated from NC State
        with a degree in Mechanical Engineering and am currently pursuing a Master's in Computer
        Science at University of Illinois Urbana-Champaign.
        <br/>
        <br/>
        Wanted to make a page as a record for stuff as I tinker around with things. Feel free to reach out!
      </div>

      <br/><br/><br/>

      <h2 className="text-3xl font-semibold">Current Interests:</h2>
      <ul className="list-disc list-inside mt-2 ml-8 text-lg">
        <li>Computer Vision</li>
        <li>Linguistics</li>
        <li>Tender Is the Night by F. Scott Fitzgerald</li>
      </ul>

      <br/><br/>

      <h2 className="text-3xl font-semibold">Experience</h2>
      <ul className="list-disc list-inside mt-2 ml-8 text-lg">
        <li>Software Engineer at Dell Technologies (Since July 2023)</li>
        <li>Teaching Assistant at NCSU</li>
        <li>Undergraduate Research Assistant at NCSU</li>
      </ul>
    </div>
  );
}
