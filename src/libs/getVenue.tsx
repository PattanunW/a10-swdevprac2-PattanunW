export default async function getVenue(id:string){
    const response = await fetch(`https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues/${id}`);
    //const response = await fetch(`http://localhost:5000/api/v1/cars/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch venues");
    }
    return await response.json();
}