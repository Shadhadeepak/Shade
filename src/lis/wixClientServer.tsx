import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections,products } from "@wix/stores";
import { cookies } from "next/headers";




export const wixClientServer = async()=>{

    
    
    let refreshToken;
    try{
    
        const cookieStore =cookies()
         refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value|| "{}");
    }catch(e){
    
    }
    
    
    
    
    
     const wixClient = createClient({
        modules: {
          products,
          collections,
          
        
        },
        auth: OAuthStrategy({
          clientId: "0a1ea100-c4fd-4d05-bf19-b44e3c6e2e42",
          tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
          },
        }),
      });
      return wixClient;
}

  