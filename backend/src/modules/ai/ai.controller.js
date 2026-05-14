// AI controller
import { processAI } from './ai.service.js';

const generateSummary = async (req, res) => {
  try {
    const result = await processAI(req.body.input);

    res.status(200).json({
      success: true,
      summary: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSummary = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Summary fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { generateSummary, getSummary };