export const containerStyle = pos => ({
  position: "fixed",
  width: "100%",
  height: "35px",
  bottom: `${pos * 40}px`,
  left: "0px",
  border: "1px grey black",
  display: "inline-block"
});

export const defaultStyle = {
  verticalAlign: "middle",
  lineHeight: "35px",
  fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  width: "100%",
  height: "35px",
  color: "white"
};

export const errorStyle = {
  backgroundColor: "#f44336"
};

export const basicStyle = {
  backgroundColor: "#f1f2f2"
};

export const successStyle = {
  backgroundColor: "#4CAF50"
};

export const warningStyle = {
  backgroundColor: "#ff9800"
};

export const infoStyle = {
  backgroundColor: "#2196F3"
};
