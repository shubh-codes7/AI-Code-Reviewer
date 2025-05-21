import callApi from '../services/ai.service.js'

export async function sendResponse(req, res) {
    const prompt = req.body.prompt

    if(!prompt){
        return res.status(400).send("Prompt is required!!")
    }

    try{
        const response = await callApi(prompt);
        res.send({response})
    }catch(error){
        console.error('Error processing AI request:', error)
        res.status(500).send("Error processing your request")
    }
    
}