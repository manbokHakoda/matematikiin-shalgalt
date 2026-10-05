function doPost(e) {

    try {

        const sheet =
            SpreadsheetApp
                .getActiveSpreadsheet()
                .getSheetByName("Sheet1");


        if (!sheet) {

            throw new Error(
                "Sheet1 олдсонгүй."
            );

        }


        const data =
            JSON.parse(
                e.postData.contents
            );


        sheet.appendRow([

            new Date(),

            data.name || "",

            data.className || "",

            data.code || "",

            data.correct || 0,

            data.score || 0,

            data.percentage || 0,

            data.grade || ""

        ]);


        return ContentService

            .createTextOutput(

                JSON.stringify({

                    success: true,

                    message:
                        "Дүн амжилттай хадгалагдлаа"

                })

            )

            .setMimeType(

                ContentService
                    .MimeType
                    .JSON

            );


    } catch (error) {


        return ContentService

            .createTextOutput(

                JSON.stringify({

                    success: false,

                    error:
                        error.toString()

                })

            )

            .setMimeType(

                ContentService
                    .MimeType
                    .JSON

            );

    }

}