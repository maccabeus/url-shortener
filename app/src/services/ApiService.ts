
export const apiGetService = async (apiPath: string): Promise<any | null> => {
    try {
        const response = await fetch(apiPath, {
            method: "GET"
        });
        const responseData = await response.json();
        return responseData;

    } catch (e: any) {
        console.log(e)
        return null;
    }
}

export const apiPostService = async (apiPath: string, data: any): Promise<any | null> => {
    try {
        const response = await fetch(apiPath, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;

    } catch (e: any) {
        console.log(e)
        return null;
    }
}

/**
 * Delete API Service
 */
export const apiDeleteService = async (apiPath: string): Promise<any | null> => {
    try {
        const response = await fetch(apiPath, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const responseData = await response.json();
        return responseData;
    } catch (e: any) {
        console.log(e)
        return null;
    }
}
