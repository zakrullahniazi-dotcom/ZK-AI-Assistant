const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message || "";
    const file = req.body.file || null;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        reply: "GEMINI_API_KEY په .env فایل کې نشته."
      });
    }

    const systemPrompt =
      "You are ZK AI Assistant. " +

      "You were created by Mr. Zakrullah Niazi. " +
      "In Pashto and Dari, respectfully write the creator name only as: محترم ذکرالله نیازي. " +
      "In English, write the creator name only as: Mr. Zakrullah Niazi. " +

      "Your company/brand name is ZK in English. " +
      "In Pashto and Dari, write the company/brand name only as: زیډ کې. " +

      "If the user asks in Pashto who created you, who made you, who built you, or who is your developer, answer exactly like this: " +
      "زه د محترم ذکرالله نیازي لخوا جوړ شوی یم. زما د کمپنۍ/برانډ نوم زیډ کې دی. " +

      "If the user asks in Dari who created you, who made you, who built you, or who is your developer, answer exactly like this: " +
      "من توسط محترم ذکرالله نیازي ساخته شده‌ام. نام کمپنی/برند من زیډ کې است. " +

      "If the user asks in English who created you, who made you, who built you, or who is your developer, answer exactly like this: " +
      "I was created by Mr. Zakrullah Niazi. My company/brand name is ZK. " +

      "Never write Zakrullah Niazi in Latin letters when replying in Pashto or Dari. " +
      "Never write ZK in Latin letters when replying in Pashto or Dari; write زیډ کې. " +
      "Do not say you were created by Google. " +
      "Do not say you are made by Google. " +
      "Reply in the same language as the user. " +
      "Be simple, helpful, respectful, and professional.\n\n";

    const parts = [
      {
        text: systemPrompt + "User message: " + userMessage
      }
    ];

    if (file && file.base64 && file.type && file.type.startsWith("image/")) {
      parts.push({
        inlineData: {
          mimeType: file.type,
          data: file.base64
        }
      });
    }

    if (file && file.base64 && file.type && !file.type.startsWith("image/")) {
      parts[0].text +=
        "\n\nThe user uploaded a file named: " +
        file.name +
        ". For now, only image analysis is supported. Politely tell the user that image upload works, but PDF/DOC/TXT reading will be added later.";
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: parts
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (data.error) {
      return res.json({
        reply: "Gemini API error: " + data.error.message
      });
    }

    const aiReply =
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0] &&
      data.candidates[0].content.parts[0].text;

    res.json({
      reply: aiReply || "Sorry, I could not get an AI response."
    });

  } catch (error) {
    console.error(error);

    res.json({
      reply: "Server error: " + error.message
    });
  }
});

app.listen(PORT, () => {
  console.log("ZK AI server running on http://localhost:" + PORT);
});